const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const Cryptr = require('cryptr'); //Info pulled from https://www.npmjs.com/package/cryptr
const cryptr = new Cryptr('myTotalySecretKey');

//GET request for all information from Junction table
router.get('/',rejectUnauthenticated, (req, res) => {

    const queryText = `SELECT * FROM "secrets" 
        JOIN "user" ON "user"."id" = "secrets"."user_id"
        JOIN "messages" ON "messages"."id" = "secrets"."messages_id"
        WHERE "user"."id" = $1;`;
       
        const user = req.user;

    {/*This is taking the response and taking the last message into table to decrypt
    the message to send back to user*/}

    pool.query(queryText, [user.id])
        .then((response) => {
            const arrayData = response.rows;
            const lastItem = arrayData.pop();
            const encryptedString = lastItem.message;
            const decryptedString = cryptr.decrypt(encryptedString); //Info pulled from https://www.npmjs.com/package/cryptr
            res.send(`${decryptedString}`);
        })
        .catch((err) => {
            console.log('Error on GET for secrets', err);
            res.sendStatus(500);
        })
})

//POST that will encrypt message and send it to DB
router.post('/', (req, res) => {
    const messageToEncrypt = req.body.secretMessage;
    const user = req.body.user;
    
    //Takes in string and encrypts api documentation found https://www.npmjs.com/package/cryptr
    const encryptedString = cryptr.encrypt(messageToEncrypt);

    //Inserts encrypted message into message table and returns id from that table
    let queryText = `INSERT INTO "messages" 
                ("message")
                VALUES ($1) RETURNING "id";`;

    pool.query(queryText, [encryptedString])
        .then((response) => {
            //Inserts encrypted message and user id into junction table to be used in GET
            queryText = `INSERT INTO "secrets" ("user_id", "messages_id") VALUES ($1, $2);`;

            console.log(response.rows[0].id, 'response ID')
            pool.query(queryText, [user, response.rows[0].id])
            .then((response) => {
                res.sendStatus(201, 'secret POST is Successful')
            })
            .catch((err) => {
                res.sendStatus(500)
            })
    })

        .catch((err) => {
            console.log(err);
        });

});






module.exports = router;
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');

//GET request for all info from DB
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "secrets" 
        JOIN "user" ON "user"."id" = "secrets"."user_id"
        JOIN "messages" ON "messages"."id" = "secrets"."messages_id"
        where "user"."id" = $1;`;
        // console.log(req, 'How do we get the secret from the DB');

    pool.query(queryText)
        .then((response) => {
            console.log('Results from GET', response);
            // res.send(response.rows);
        })
        .catch((err) => {
            console.log('Error on GET for secrets', err);
            // res.sendStatus(500);
        })
})

//POST request to send review info from form to DB after getting lat and lng from google
router.post('/', (req, res) => {
    console.log(req.body, 'what IS THIS');
    const messageToEncrypt = req.body.secretMessage;
    


    //Takes in string and encrypts it
    const encryptedString = cryptr.encrypt(messageToEncrypt);

    const queryText = `INSERT INTO "messages" 
                ("message")
                VALUES ($1);`;

    pool.query(queryText, [encryptedString])
        .then((response) => {
           console.log(response, 'this is the response after the encryption!!!')
        })

        .catch((err) => {
            console.log(err);
        });

});






module.exports = router;
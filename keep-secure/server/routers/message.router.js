const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');

//GET request for all info from DB
// router.get('/', (req, res) => {
//     const queryText = 'SELECT * FROM "review";';

//  1

//     pool.query(queryText)
//         .then((response) => {
//             console.log('Results from GET', response);
//             res.send(response.rows);
//         })
//         .catch((err) => {
//             console.log('Error on GET', err);
//             res.sendStatus(500);
//         })
// })

//POST request to send review info from form to DB after getting lat and lng from google
router.post('/', (req, res) => {
    let secretMessage = req.body;
    console.log(secretMessage, 'this what I am sending to the message table updated');


    // const queryText = `INSERT INTO "messages" 
    //             ("message")
    //             VALUES ($1);`;

    // pool.query(queryText, [secretMessage])
    //     .then((response) => {
    //         console.log(response, 'this is the response from the DATA BASE');
    //         res.sendStatus(200);
    //     })

    //     .catch((err) => {
    //         console.log(err);
    //     });

});






module.exports = router;
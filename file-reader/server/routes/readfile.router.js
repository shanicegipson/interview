const express = require('express');
const router = express.Router();
// const pool = require('../modules/pool');
const fs = require('fs');

const file = require('../../Untitled document.txt')


// router.get('/', (req, res) => {
//     const queryText = 'SELECT * FROM "file";';

    // fs.readFile(file,  (err,data) => {
//     if (err) throw err;

//     console.log(data.toString());
// })

//     pool.query(queryText)
//         .then((result) => {
//             console.log(result)

//             res.send(result.rows);
//         })
//         .catch((err) => {
//             console.log('Error: ', err);
//             res.sendStatus(500);
//         });
// });

router.post('/', (req, res) => {
    // const file = req.body;
    console.log(file, 'this is the file on the server');
    // const queryText = `INSERT INTO "books" ("file")
    //                     VALUES ($1);`;
    
    // pool.query(queryText, [book.title, book.author, book.published ])
    //     .then((result) => {
    //         res.sendStatus(201);
    //     })
    //     .catch((err) => {
    //         console.log('Error posting: ', err);
    //         res.sendStatus(500);
    //     });

});

module.exports = router;





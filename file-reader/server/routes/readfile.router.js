const express = require('express');
const router = express.Router();
const fs = require('fs');


router.post('/', (req, res) => {
    const file = req.body;
    console.log('this is the file on the server', req.body);
    // fs.readFile(req.body.path, 'utf-8', (err, data) => {
    //     console.log(data);
    // })
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
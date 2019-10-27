const express = require('express');
const router = express.Router();
// const pool = require('../modules/pool');
const fs = require('fs');

const file = require('../../Untitled document.txt')



router.post('/', (req, res) => {
    // const file = req.body;
    console.log(file, 'this is the file on the server');
    // const queryText = `INSERT INTO "file" ("path")
    //                     VALUES ($1);`;
    
    // pool.query(queryText)
    //     .then((result) => {
    //         res.sendStatus(201);
    //     })
    //     .catch((err) => {
    //         console.log('Error posting: ', err);
    //         res.sendStatus(500);
    //     });

});

module.exports = router;




// fs.readFile('Untitled document.txt',  (err,data) => {
//     if (err) throw err;

//     console.log(data.toString());
// })
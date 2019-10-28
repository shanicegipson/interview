const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/', (req, res) => {
    console.log(req.body, 'in the coordinates router');
    const latitude = req.body;
    const longitude = req.body;

    let queryText = `INSERT INTO "review" ("latitude", "longitude") VALUES ($1, $2);`;

    pool.query(queryText, [latitude, longitude])
    .then((response) => {
        res.sendStatus(201, 'Coordinates POST is Successful')
            })
            .catch((err) => {
                res.sendStatus(500)
            })
  
    .catch((err) => {
        console.log(`Error in adding coordinates ${err}`)
        res.sendStatus(500)}
    );
    
});

module.exports = router;
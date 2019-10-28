const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/', (req, res) => {
    console.log(req.body, 'in the business router');
    const businessName = req.body;
    const review = req.body;

    let queryText = `INSERT INTO "review" ("businessName", "review") VALUES ($1, $2);`;

    pool.query(queryText, [businessName, review])
    .then((response) => {
        res.sendStatus(201, 'business info POST is Successful')
            })
            .catch((err) => {
                res.sendStatus(500)
            })
  
    .catch((err) => {
        console.log(`Error in adding business info ${err}`)
        res.sendStatus(500)}
    );
    
});

module.exports = router;
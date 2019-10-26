const express = require('express');
const pool = require('../modules/pool');


const router = express.Router();

// router.get('/', (req, res) => {
//     const queryText = ``;
    
//     pool.query(queryText)
//     .then((result) => {res.send(result.rows);})
//     .catch((err) => {
//         console.log('Error completing SELECT review query', err);
//         res.sendStatus(500);
//     });
// });

router.post('/add', (req, res) => {
    console.log(req.body, 'this is the info on server');
    const queryText = 'SELECT * FROM movies WHERE id=$1';
    pool.query(queryText, [req.params.id])
      .then((result) => { res.send(result.rows); })
      .catch((err) => {
        console.log('Error completing SELECT movie query', err);
        res.sendStatus(500);
      });
});


 
 module.exports = router;
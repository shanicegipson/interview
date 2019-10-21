const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "movies"
    JOIN "movie_genres" ON "movies".id = "movie_genres".movies_id
    JOIN "genres" ON "movie_genres".genres_id = "genres".id
    ORDER BY "movies".title ASC;`;
    
    pool.query(queryText)
    .then((result) => {res.send(result.rows);})
    .catch((err) => {
        console.log('Error completing SELECT movie query', err);
        res.sendStatus(500);
    });
});

router.get('/details/:id', (req, res) => {
    const queryText = 'SELECT * FROM movies WHERE id=$1';
    pool.query(queryText, [req.params.id])
      .then((result) => { res.send(result.rows); })
      .catch((err) => {
        console.log('Error completing SELECT movie query', err);
        res.sendStatus(500);
      });
  });

  router.put('/movie/:id', (req, res) => {
    const updatedMovie = req.body;
    const movieId = req.params.id
    console.log(movieId, 'MOVIE ID');
    console.log(updatedMovie, 'MOVIE information');
  
    const queryText = `UPDATE "movies"
    SET "title" = $1, 
    "description" = $2
    WHERE "id"=$3;`;
  
    const queryValues = [
      updatedMovie.title,
      updatedMovie.description,
      movieId
    ];
  
    pool.query(queryText, queryValues)
      .then(() => { res.sendStatus(200); })
      .catch((err) => {
        console.log('Error Updating movie info', err);
        res.sendStatus(500);
      });
  });
  
 
 module.exports = router;
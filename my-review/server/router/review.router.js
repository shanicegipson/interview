const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

//Geocode the address from form waits for Google to respond and sends it to DB reference https://www.npmjs.com/package/@google/maps
const googleMapsClient = require('@google/maps').createClient({
    key: process.env.REACT_APP_GOOGLE_MAPS,
    Promise: Promise
})

//GET request for all info from DB
router.get('/', (req, res) => {
    const queryText = 'SELECT * FROM "review";';

    pool.query(queryText)
        .then((response) => {
            console.log('Results from GET', response);
            res.send(response.rows);
        })
        .catch((err) => {
            console.log('Error on GET', err);
            res.sendStatus(500);
        })
})

//POST request to send review info from form to DB after getting lat and lng from google
router.post('/', (req, res) => {

    let reviewInfo = req.body;

    googleMapsClient.geocode({ address: reviewInfo.address })
        .asPromise()
        .then((response) => {
            const coordinates = response.json.results[0].geometry.location
            reviewInfo.lat = coordinates.lat;
            reviewInfo.lng = coordinates.lng;
            reviewInfo.address = response.json.results[0].formatted_address;

            const queryText = `INSERT INTO "review" 
                ("business_name","review","address","latitude","longitude")
                VALUES ($1, $2, $3, $4, $5);`;

            pool.query(queryText, [reviewInfo.businessName,
            reviewInfo.review,
            reviewInfo.address,
            reviewInfo.lat,
            reviewInfo.lng])
                .then((result) => {
                    res.sendStatus(200);
                })
        })
        .catch((err) => {
            console.log(err);
        });

});




module.exports = router;
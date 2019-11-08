const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();


const googleMapsClient = require('@google/maps').createClient({
    key: process.env.REACT_APP_GOOGLE_MAPS,
    Promise: Promise
})

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

router.post('/', (req, res) => {
    console.log(req.body, 'this is the info on server');
    let reviewInfo = req.body;
    console.log(reviewInfo.address);
    googleMapsClient.geocode({ address: reviewInfo.address })
        .asPromise()
        .then((response) => {
            console.log(response.json.results[0].geometry.location, 'this should be lat and long');
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
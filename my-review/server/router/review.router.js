const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');


// const googleMapsClient = require('@google/maps').createClient({
//   key: process.env.REACT_APP_GOOGLE_MAPS,
//   Promise: Promise
// })

router.post('/map', (req, res) => {
    console.log(req.body, 'this is the info on server');
    
});


 
 module.exports = router;
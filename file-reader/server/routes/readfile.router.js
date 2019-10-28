const express = require('express');
const router = express.Router();
const fs = require('fs');

///will read file but path is coming through
router.post('/', (req, res) => {
    const file = req.body;
    console.log('this is the file on the server', req.body);
    fs.readFile(req.body.path, 'utf-8', (err, data) => {
        console.log(data);
    })
    

});

module.exports = router;
const fs = require('fs');
const formidable = require('formidable');
const express = require('express');
const app = express();
const PORT = 5000;

// const fileRouter = require('./routes/readfile.router');

app.use(express.static('server/public'));


// var upload_html = fs.readFileSync("upload_file.html");
// var upload_path = "/Users/shanice/Documents/mysidewalk/codechallenge/interview/file-reader/server/public/";




app.listen(PORT, () => {
    console.log('listening on port', PORT);
});
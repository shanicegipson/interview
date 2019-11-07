const express = require('express');
const bodyParser = require ('body-parser');
const app = express();
const multer = require('multer');

const PORT = 6000;

const fileRouter = require('./routes/readfile.router');

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended:true}));
app.use(bodyParser.json());

//will send file to be read
app.use('/api/read', fileRouter);



app.listen(PORT, () => {
    console.log('listening on port', PORT);
});
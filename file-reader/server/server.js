const express = require('express');
const bodyParser = require ('body-parser');

const app = express();
const PORT = 5000;

const fileRouter = require('./routes/readfile.router');

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended:true}));
app.use(bodyParser.json());


app.use('/api/read', fileRouter);

app.listen(PORT, () => {
    console.log('listening on port', PORT);
});
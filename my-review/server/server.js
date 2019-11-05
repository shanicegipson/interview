const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const reviewRouter = require('./router/review.router');
const mapRouter = require('./router/map.router');
const businessRouter = require('./router/business.router');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
app.use('/api/review', reviewRouter);
app.use('/api/coordinates', mapRouter);
app.use('/api/business', businessRouter);



/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});
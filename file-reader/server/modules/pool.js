const pg = require('pg');

const Pool = pg.Pool;
const pool = new Pool({
    database:'file-reader',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000,
});

pool.on('connect', () => {
    console.log ('Pool is connected');
});

pool.on('error', (error) => {
    console.log ('Oh no Pool Error: ', error);
});

module.exports = pool;
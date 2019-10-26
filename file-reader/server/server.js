const fs = require('fs');

fs.readFile('Input.txt', 'utf-8' (err,data) => {
    if (err) throw err;

    console.log(data.toString());
})
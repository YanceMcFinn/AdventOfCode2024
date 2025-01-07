const fs = require 'fs'

fs.readFile('input.txt', 'utf-8', (err, data) => {
    const data = data[0]

    console.log(data);
})
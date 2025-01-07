const fs = require('fs')

fs.readFile('./Day06/input.txt', 'utf-8', (err, data) => {
    const map = data.split('\n').split('')
    console.log(map)
})
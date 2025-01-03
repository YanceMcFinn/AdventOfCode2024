fs = require('fs')

fs.readFile('./Day05/input.txt', 'utf-8', (err, data) => {
    const arr = data.split('\n')
    console.log(typeof arr[0])
})
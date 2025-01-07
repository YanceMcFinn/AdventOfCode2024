const fs = require('fs');
const { start } = require('repl');

fs.readFile('./Day06/input.txt', 'utf-8', (err, data) => {
    const map = data.split('\n').map(row => row.split(''));
    const directionals = /[\^<>v]/;
    let startY = map.indexOf(map.find(row => row.some(e => directionals.test(e))));
    let startX = map[startY].indexOf(map[startY].find(e => directionals.test(e)));
    const guard = map[startY][startX]


    

   
    console.log(guard)
})
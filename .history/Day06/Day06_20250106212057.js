const fs = require('fs');
const { start } = require('repl');

fs.readFile('./Day06/input.txt', 'utf-8', (err, data) => {
    const map = data.split('\n').map(row => row.split(''));
    const guardIcons = /[\^<>v]/;
    let startY = map.indexOf(map.find(row => row.some(e => guardIcons.test(e))));
    let startX = map[startY].indexOf(map[startY].find(e => guardIcons.test(e)));
    
   

    let test = [
        '<', '.', '.', '.', '.', '.', '#', '.', '.', '.', '.', '.',
        '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.',
        '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.',
        '.', '.', '.', '.', '<', '.', '.', '.', '#', '.', '.', '.',
        '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.',
        '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.',
        '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.',
        '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.',
        '.', '.', '.', '.']

    console.log(map[startY])
})
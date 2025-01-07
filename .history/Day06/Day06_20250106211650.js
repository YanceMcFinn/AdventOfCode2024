const fs = require('fs')

fs.readFile('./Day06/input.txt', 'utf-8', (err, data) => {
    const map = data.split('\n').map(row => row.split(''));
    const guardIcons = /[\^<>v]/
    const guardTest = (element) => element == guardIcons;
    let startY = map.indexOf(map.find(row => row.some(e => guardIcons.test(e))));
    let startX = guardTest('<');
    
   

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

    console.log(startX)
})
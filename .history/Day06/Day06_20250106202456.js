const fs = require('fs')

fs.readFile('./Day06/input.txt', 'utf-8', (err, data) => {
    const map = data.split('\n').map(row => row.split(''));
    const guardIcons = /([\^<>v])/

    let y = map.indexOf(map.find(row => row.includes(guardIcons)));
    let x = 0;
    

    console.log(map.find(row => row.includes(guardIcons)))
})
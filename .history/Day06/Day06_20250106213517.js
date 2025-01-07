const fs = require('fs');
const { start } = require('repl');

fs.readFile('./Day06/input.txt', 'utf-8', (err, data) => {
    const map = data.split('\n').map(row => row.split(''));
    const directionals = /[\^<>v]/;
    let guardY = map.indexOf(map.find(row => row.some(e => directionals.test(e))));
    let guardX = map[guardY].indexOf(map[guardY].find(e => directionals.test(e)));
    const guard = map[guardY][guardX]

    if(guard == '^'){
        while(map[guardY - 1][guardX] != '#' && guardY >= 0){
            map[guardY][guardX] = '0'
            guardY -= 1;
        }
    }
    

   
    console.log(map)
})
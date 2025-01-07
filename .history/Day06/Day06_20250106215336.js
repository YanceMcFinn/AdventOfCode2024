const fs = require('fs');
const { start } = require('repl');

fs.readFile('./Day06/input.txt', 'utf-8', (err, data) => {
    const map = data.split('\n').map(row => row.split(''));

    const mapWidth = map[0].length
    const mapHeight = map.length

    const directionals = /[\^<>v]/;
    let guardY = map.indexOf(map.find(row => row.some(e => directionals.test(e))));
    let guardX = map[guardY].indexOf(map[guardY].find(e => directionals.test(e)));
    const guard = map[guardY][guardX]

    let stops = 1;

    if(guard == '^'){
        while(map[guardY - 1][guardX] != '#' && guardY > 0){
            map[guardY][guardX] = '0'
            map[guardY-1][guardX] = '^'
            stops += 1;
            guardY -= 1;

            
        }
        if (map[guardY - 1][guardX] == '#'){
            map[guardY][guardX] = '>'
        }
    }

    if(guard == '>'){
        while(map[guardY][guardX + 1] != '#' && guardX < mapWidth){
            map[guardY][guardX + 1] = '>'
            map[guardY][guardX] = '0'
            stops += 1;
            guardX += 1;

            
        }
        if (map[guardY][guardX + 1] == '#'){
            map[guardY][guardX] = 'v'
        }
    }
    
    if(guard == 'v'){
        while(map[guardY + 1][guardX] != '#' && guardY < mapHeight){
            map[guardY + 1][guardX] = 'v'
            map[guardY][guardX] = '0'
            stops += 1;
            guardY += 1;

            
        }
        if (map[guardY][guardX + 1] == '#'){
            map[guardY][guardX] = '<'
        }
    }

    if(guard == '<'){
        while(map[guardY][guardX - 1] != '#' && guardX > 0){
            map[guardY][guardX - 1] = '<'
            map[guardY][guardX] = '0'
            stops += 1;
            guardY += 1;

            
        }
        if (map[guardY][guardX - 1] == '#'){
            map[guardY][guardX] = '^'
        }
    }
   
    console.log(map)
})
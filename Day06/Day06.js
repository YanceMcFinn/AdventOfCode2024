const fs = require('fs');
const { start } = require('repl');
let newData = ''
fs.readFile('./Day06/input.txt', 'utf-8', (err, data) => {
    const map = data.split('\n').map(row => row.split(''));

    const mapWidth = map[0].length
    const mapHeight = map.length

    const directionals = /[\^<>v]/;
    let guardY = map.indexOf(map.find(row => row.some(e => directionals.test(e))));
    let guardX = map[guardY].indexOf(map[guardY].find(e => directionals.test(e)));
    const guard = map[guardY][guardX]

    let stops = 1;
    let altStops = 0;

    console.log(guard === '^')

    while(guardX >= 0 && guardX <= mapWidth && guardY >= 0 && guardY <= mapHeight){
        if(guard === '^'){
            if (map[guardY-1][guardX] != '#'){
                map[guardY][guardX] = '0'
                map[guardY-1][guardX] = '^'
                guardY -= 1;
                stops += 1;
            }
            else {
                map[guardY][guardX] = '>'
            }
        }

        if(guard === '>'){
            if (map[guardY][guardX + 1] != '#'){
                map[guardY][guardX] = '0'
                map[guardY][guardX + 1] = '>'
                guardX += 1;
                stops += 1;
            }
            else {
                map[guardY][guardX] = 'v'
            }
        }

        if(guard === 'v'){
            if (map[guardY + 1][guardX] != '#'){
                map[guardY][guardX] = '0'
                map[guardY + 1][guardX] = 'v'
                guardY += 1;
                stops += 1;
            }
            else {
                map[guardY][guardX] = '<'
            }
        }

        if(guard === '<'){
            if (map[guardY][guardX - 1] != '#'){
                map[guardY][guardX] = '0'
                map[guardY][guardX - 1] = '<'
                guardX -= 1;
                stops += 1;
            }
            else {
                map[guardY][guardX] = '^'
            }
        }
        
    }



    /*if(guard == '^'){
            map[guardY][guardX] = '0'
            if (guardY > 0){
                map[guardY-1][guardX] = '^'
                guardY -= 1;
            }
            stops += 1;
            

            
        }
        if (map[guardY - 1][guardX] == '#'){
            map[guardY][guardX] = '>'
        }
    }

    if(guard == '>'){
        while(map[guardY][guardX + 1] != '#' && guardX <= mapWidth){
            map[guardY][guardX] = '0'
            
            if (guardX < mapWidth){
                map[guardY][guardX + 1] = '>'
                guardX += 1;
            }
            stops += 1;
            

            
        }
        if (map[guardY][guardX + 1] == '#'){
            map[guardY][guardX] = 'v'
        }
    }
    
    if(guard == 'v'){
        while(map[guardY + 1][guardX] != '#' && guardY <= mapHeight){
            map[guardY][guardX] = '0'

            if (guardY < mapHeight){
                map[guardY + 1][guardX] = 'v'
                guardY += 1;
            }
            stops += 1;
            

            
        }
        if (map[guardY][guardX + 1] == '#'){
            map[guardY][guardX] = '<'
        }
    }

    if(guard == '<'){
        while(map[guardY][guardX - 1] != '#' && guardX >= 0){
            map[guardY][guardX] = '0'
            if (guardX > 0){
                map[guardY][guardX - 1] = '<';
                guardY += 1;
            }

            stops += 1;
            

            
        }
        if (map[guardY][guardX - 1] == '#'){
            map[guardY][guardX] = '^'
        }
    }*/

    map.forEach(row => {
        row.forEach(e => {
            if(e == '0'){
                altStops += 1;
            }
        })
    })
   
    

    for (let i = 0; i < map.length; i++){
        let joined = map[i].join('');
        console.log(joined)
    };
})

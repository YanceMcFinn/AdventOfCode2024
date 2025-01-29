const fs = require('fs');
fs.readFile('./Day06/input.txt', 'utf-8', (err, data) => {
    const map = data.split('\n').map(row => row.split(''));

    const mapWidth = map[0].length
    const mapHeight = map.length

    const findStart = () => {
        for (let i = 0; i<map.length; i++){
            for(let j = 0 ; j < map[0].length; j++){
                if (map[i][j] !== '.' && map[i][j] !== '#'){
                    return [i,j]
                }
            }
        }
    }

    const directionals = /[\^<>v]/;
    let guardY = map.indexOf(map.find(row => row.some(e => directionals.test(e))));
    let guardX = map[guardY].indexOf(map[guardY].find(e => directionals.test(e)));
    const guard = map[guardY][guardX]

    let stops = 1;
    let altStops = 0;

    console.log(map[0][130])

    while((guardX > 0 && guardX < mapWidth) || (guardY > 0 && guardY < mapHeight)){
        if(guard === '^'){
            if (map[guardY-1][guardX] != '#'){
                map[guardY][guardX] = '0'
                stops += 1;
                if(guardY > 0){
                    map[guardY-1][guardX] = '^'
                    guardY -= 1;
                }
            }
            else {
                map[guardY][guardX] = '>'
            }
        }

        if(guard === '>'){
            if (map[guardY][guardX + 1] != '#'){
                map[guardY][guardX] = '0'
                stops += 1;
                if(guardX < mapWidth - 1){
                    map[guardY][guardX + 1] = '>'
                    guardX += 1;
                }
            }
            else {
                map[guardY][guardX] = 'v'
            }
        }

        if(guard === 'v'){
            if (map[guardY + 1][guardX] != '#'){
                map[guardY][guardX] = '0'
                stops += 1;
                if(guardY < mapHeight - 1){
                    map[guardY + 1][guardX] = 'v'
                    guardY += 1;
                }
            }
            else {
                map[guardY][guardX] = '<'
            }
        }

        if(guard === '<'){
            if (map[guardY][guardX - 1] != '#'){
                map[guardY][guardX] = '0'
                stops += 1;
                if(guardX > 0){
                    map[guardY][guardX - 1] = '<'
                    guardX -= 1;
                }
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
})

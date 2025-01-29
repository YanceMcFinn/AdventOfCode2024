const fs = require('fs');
fs.readFile('./Day06/input.txt', 'utf-8', (err, data) => {
    const map = data.split('\n').map(row => row.split(''));

    const mapWidth = map[0].length
    const mapHeight = map.length;

    const directionals = /[\^<>v]/;

    const directions = [
        {dY: -1, dX: 0},
        {dY: 0, dX: 1},
        {dY: 1, dX: 0},
        {dY: 0, dX: -1}
    ]

    let visited = new Set(); //used Set b/c will not add duplicates (locations already visited)

    let guardY = map.indexOf(map.find(row => row.some(e => directionals.test(e))));
    let guardX = map[guardY].indexOf(map[guardY].find(e => directionals.test(e)));

    let direction = 0;
      
    while(true){
        visited.add(`${guardY}, ${guardX}`);

        guardNextY = guardY + directions[direction].dY;
        guardNextX = guardX + directions[direction].dX;


        if (guardNextY > mapHeight || guardNextY < 0 || guardNextX > mapWidth || guardNextY < 0){
            break;
        }

        if (map[guardNextY][guardNextX] == '#'){
            direction = (direction + 1) % 4;
        }

        else {
            guardY = guardNextY;
            guardX = guardNextX;
        }
    }    
    console.log(visited.size);
})
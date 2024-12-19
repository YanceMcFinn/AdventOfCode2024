fs = require('fs')

fs.readFile('./Day03/input.txt', 'utf-8', (err, mem) => {


pattern=/mul\(\d{1,3},\d{1,3}\)|do\(\)|don't\(\)/g;
matches=mem.match(pattern);

let sum = 0; 
let run = true;
matches.map((row)=>{
    if (row == "do()"){
        run = true;
    }
    else if (row == "don't()"){
        run = false;
    }
    else{
        if (run == true){
            row = row.replaceAll('(', ',').replaceAll(')',',');
            row = row.split(',')
            row.splice(0,1)
    
            num1 = parseInt(row[0])
            num2 = parseInt(row[1])

            sum += (num1 * num2)
        }
    
    }
})
console.log(`The sum is: ${sum}`)})




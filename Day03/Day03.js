fs = require('fs')

fs.readFile('./Day03/input.txt', 'utf-8', (err, mem) => {


pattern=/mul\(\d{1,3},\d{1,3}\)/g;
matches=mem.match(pattern);

let sum = 0; 
matches.map((row)=>{
    row = row.replaceAll('(', ',').replaceAll(')',',');
    row = row.split(',')
    row.splice(0,1)
    
    num1 = parseInt(row[0])
    num2 = parseInt(row[1])

    sum += (num1 * num2)
})
console.log(sum)})




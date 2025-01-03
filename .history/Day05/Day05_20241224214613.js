fs = require('fs')

fs.readFile('./Day05/input.txt', 'utf-8', (err, data) => {
    const arr = data.split('\n')
    const pgRules = [];
    const pgPrints = [];

    const fail = [];
    
    let sum = 0;

    arr.map((item) => {
        if (item.includes('|')){
            pgRules.push(item.split('|'))
        }

        else{
            pgPrints.push(item.split(','))
        }
    })
     
    pgRules.map((rule) => {
        rule[0] = parseInt(rule[0])
        rule[1] = parseInt(rule[1])

    })

    pgPrints.forEach((line) => {
        for(let i = 0; i < line.length; i++){
            line[i] = parseInt(line[i])
        }
    })

    pgRules.forEach((rule) => {
        pgPrints.forEach((pgSet) => {
            if(pgSet.includes(rule[0]) && pgSet.includes(rule[1])){
                if(pgSet.indexOf(rule[0]) > pgSet.indexOf(rule[1])){
                    if (!fail.includes(pgPrints.indexOf(pgSet))){
                    fail.push(pgPrints.indexOf(pgSet))}
                }
            }
        })
    })

    fail.forEach((index) => {
        pgPrints.splice(index,1);
    })

    pgPrints.forEach((pgSet) => {
        midIndex = Math.floor(pgSet.length/2);
        sum += pgSet[midIndex]
    })

    console.log(sum)
})
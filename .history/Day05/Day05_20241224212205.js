fs = require('fs')

fs.readFile('./Day05/input.txt', 'utf-8', (err, data) => {
    const arr = data.split('\n')
    const pgRules = [];
    const pgPrints = [];

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

    pgRules.forEach

    console.log(t)
    console.log(pgRules)
})
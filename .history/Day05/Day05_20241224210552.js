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

    pgPrints.map((line) => {
        line.map((num) => {
            parseInt(num)
        })
    })

    console.log(pgPrints)
    console.log(pgRules)
})
fs = require('fs')

fs.readFile('./Day05/input.txt', 'utf-8', (err, data) => {
    const arr = data.split('\n')
    const pgRules = [];
    const pgPrints = [];

    arr.map((item) => {
        if (item.includes('|')){
            pgRules.push(item.split('|'),map((num) => {parseInt(num)}))
        }

        else{
            pgPrints.push(item.split(','))
        }
    })

    console.log(pgPrints)
    console.log(pgRules)
})
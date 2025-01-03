fs = require('fs')

fs.readFile('./Day05/input.txt', 'utf-8', (err, data) => {
    const arr = data.split('\n')
    const pgRules = [];
    const pgPrints = [];

    arr.map((item) => {
        if (item.contains('|')){
            pgRules.push(item)
        }

        else{
            pgPrints.push(item)
        }
    })

    console.log(pgPrints)
    console.log(pgRules)
})
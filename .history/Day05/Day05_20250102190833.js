fs = require('fs')

fs.readFile('./Day05/input.txt', 'utf-8', (err, data) => {
    data = data.split('\r\n')

    const fail = [];
    
    let sum = 0;

    /*pgRules = pgRules.split('\n').map((rule) => rule.split('|'));
    pgPrints = pgPrints.split('\n').map((pgSet) => pgSet.split(','))

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
    

    pgPrints.forEach((pgSet) => {
        if(!fail.includes(pgPrints.indexOf(pgSet))){
            midIndex = Math.floor(pgSet.length/2);
            sum += pgSet[midIndex]
        }
    })

    fail.forEach((failInd) => {
        let failedSet = pgPrints[failInd]
        console.log(failedSet)
    })
*/
    console.log(data)
})
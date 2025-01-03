fs = require('fs')

fs.readFile('./Day05/input.txt', 'utf-8', (err, data) => {
    let [pgRules, pgPrints] = data.split('\n\n')

    const fail = [];
    
    let sum = 0;

    const isOrdered = (pages, rules) => {
        for (let i=0; i< pages.length-1; i++){
            if(!rules.find((rule) => rule[0] === pages[i] && rule[1] === pages[i+1])){
                fail.push(pages)
                return false
            }
        }
        return true
        }


    for(let i=0; i<pgPrints.length - 1;i++){
        if(!isOrdered(pgRules,pgPrints[i])){
            if (!fail.includes(i)){
                fail.push(i)}
        }
        else {
            
                midIndex = Math.floor(pgPrints[i].length/2);
                sum += parseInt(pgPrints[i][midIndex])
        }
           
    }
    pgRules = pgRules.split('\n').map((rule) => rule.split('|'));
    pgPrints = pgPrints.split('\n').map((pgSet) => pgSet.split(','))

    fail.forEach((failInd) => {
        let failedSet = pgPrints[failInd]
        //console.log(failedSet)
    })

    console.log(fail)
})
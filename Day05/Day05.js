fs = require('fs')

fs.readFile('./Day05/input.txt', 'utf-8', (err, data) => {
    const arr = data.split('\n')
    const pgRules = [];
    const pgPrints = [];

    const fail = [];
    
    let sum = 0;
    let failSum = 0;

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
    

    pgPrints.forEach((pgSet) => {
        if(!fail.includes(pgPrints.indexOf(pgSet))){
            midIndex = Math.floor(pgSet.length/2);
            sum += pgSet[midIndex]
        }
    })
    fail.forEach((failInd) => {
        let failedSet = pgPrints[failInd];
        for (let i = 0; i < failedSet.length-1; i++){
            pgRules.forEach((rule) => {
                if (rule.includes(failedSet[i]) && rule.includes(failedSet[i+1])){
                    let first = failedSet[i]
                    let second = failedSet[i+1]
                    if (second == rule[0]){
                        failedSet.splice(i,0,second)
                        failedSet.splice(i+2,1)
                    }

                }
            })
        }
        console.log(failedSet)
        midIndex = Math.floor(failedSet.length/2);
            failSum += failedSet[midIndex]
    })

    console.log(failSum)
})
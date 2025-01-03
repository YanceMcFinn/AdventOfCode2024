fs = require('fs')

fs.readFile('./Day05/input.txt', 'utf-8', (err, data) => {
    let [pgRules, pgPrints] = data.split('\n\n')

    const fail = [];
    
    let sum = 0;

    function isOrdered(rules, pages){
        let ordered = true
        for(let i=0; i<rules.length; i++){
            if(pages.includes(rules[i][0]) && pages.includes(rules[i][1])){
                if(pages.indexOf(rules[i][0]) > pages.indexOf(rules[i][1])){
                    ordered = false;
                }
            }
        }
        return ordered 
        }


    for(let i=0; i<pgPrints.length;i++){
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
            sum += parseInt(pgSet[midIndex])
        }
    })

    fail.forEach((failInd) => {
        let failedSet = pgPrints[failInd]
        //console.log(failedSet)
    })

    console.log(sum)
})
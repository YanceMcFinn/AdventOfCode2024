fs = require('fs')

fs.readFile('./Day05/input.txt', 'utf-8', (err, data) => {
    let [pgRules, pgPrints] = data.split('\n\n');
    pgRules = pgRules.split('\n').map((rule) => rule.split('|'));
    pgPrints = pgPrints.split('\n').map((pgSet) => pgSet.split(','))

    const fail = [];
    
    let sum = 0;

    const isOrdered = (pages, rules) => {
        //75,47,61,53,29 75|47
        for (let i = 0; i < pages.length - 1; i++) {
          if (
            !rules.find((rule) => rule[0] === pages[i] && pages[1] === update[i + 1])
          ) {
            return false;
          }
        }
        return true;
      };


    for(let i=0; i<pgPrints.length - 1;i++){
        if(!isOrdered(pgPrints[i],pgRules)){
            if (!fail.includes(i)){
                fail.push(i)}
        }
        else {
            
                midIndex = Math.floor(pgPrints[i].length/2);
                sum += parseInt(pgPrints[i][midIndex])
        }
           
    }

    fail.forEach((failInd) => {
        let failedSet = pgPrints[failInd]
        //console.log(failedSet)
    })

    console.log(sum)
})
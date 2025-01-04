fs = require('fs')

fs.readFile('./Day05/input.txt', 'utf-8', (err, data) => {
    let [pgRules, pgPrints] = data.split('\n\n');
    pgRules = pgRules.split('\n').map((rule) => rule.split('|'));
    pgPrints = pgPrints.split('\n').map((pgSet) => pgSet.split(','))

    const fail = [];
    
    let sum = 0;
    let failSum = 0;

    const isOrdered = (pages, rules) => {
      for (let i=0; i < rules.length; i++){
        if(pages.includes(rules[i][0]) && pages.includes(rules[i][1])){
          if(pages.indexOf(rules[i][0])>pages.indexOf(rules[i][1])){
            return false;
          }
        }
      }
      return true;
    }


    for(let i=0; i<pgPrints.length - 1;i++){
        if(isOrdered(pgPrints[i],pgRules)){
          midIndex = Math.floor(pgPrints[i].length/2);
          sum += parseInt(pgPrints[i][midIndex])
        }
        
        else {
            let set = pgPrints[i]
            for (let i = 0; i < set.length - 1; i++){
              for(let j = i+1; j < set.length; j++){
                if(pgRules.includes([set[j],set[i]])){
                  set[j], set[i] = set[i],set[j]
                }
              }
            }
            midIndex = Math.floor(set.length/2);
            failSum += parseInt(set[midIndex])
                
        }
           
    }

    console.log(pgRules.includes('23'))
})
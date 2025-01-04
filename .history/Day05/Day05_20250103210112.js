fs = require('fs')

fs.readFile('./Day05/input.txt', 'utf-8', (err, data) => {
    let [pgRules, pgPrints] = data.split('\n\n');
    pgRules = pgRules.split('\n').map((rule) => rule.split('|'));
    for (let i=0; i < pgRules.length; i++){
      pgRules[i] = pgRules[i].map((num) => parseInt(num))
    }
    pgPrints = pgPrints.split('\n').map((pgSet) => pgSet.split(','))
    for (let i=0; i < pgPrints.length; i++){
      pgPrints[i] = pgPrints[i].map((num) => parseInt(num))
    }
    const fail = [];
    
    let sum = 0;
    let failSum = 0;

    const isOrdered = (pages, rules) => {
      for (let i = 0; i < pages.length - 1; i++) {
        if (
          !rules.find((rule) => rule[0] === pages[i] && rule[1] === pages[i + 1])
        ) {
          return false;
        }
      }
      return true;
    }

    const containsArray = (arr, target) => {
      return arr.some(innerArray => 
        innerArray.length === target.length && 
        innerArray.every((value, index) => value === target[index])
      );
    }

    for(let i=0; i<pgPrints.length - 1;i++){
        if(isOrdered(pgPrints[i],pgRules)){
          midIndex = Math.floor(pgPrints[i].length/2);
          sum += pgPrints[i][midIndex]
        }
        
        else {
            let set = pgPrints[i]
            console.log(set)
            for (let i = 0; i < set.length - 1; i++){
              for(let j = i+1; j < set.length; j++){
               let testPgs = [set[j],set[i]]
               if(containsArray(pgRules, testPgs)){
                let first = set[j]
                let second = set[i]

                set[i] = first
                set[j] = second
               }
              }
            }
            console.log(set)
            midIndex = Math.floor(set.length/2);
            failSum += set[midIndex]
                
        }
           
    }
    let test = [[1,2],[3,4],5,6]
    console.log(failSum)
})
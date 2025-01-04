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
      for (let i=0; i < rules.length; i++){
        if(pages.includes(rules[i][0]) && pages.includes(rules[i][1])){
          if(pages.indexOf(rules[i][0])>pages.indexOf(rules[i][1])){
            return false;
          }
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
          sum += parseInt(pgPrints[i][midIndex])
        }
        
        else {
            let set = pgPrints[i]
            for (let i = 0; i < set.length - 1; i++){
              for(let j = i+1; j < set.length; j++){
               let testPgs = [set[j],set[i]]
               if(containsArray(pgRules, testPgs)){
                set[j], set[i] = set[i], set[j]
               }
              }
            }
            midIndex = Math.floor(set.length/2);
            failSum += parseInt(set[midIndex])
                
        }
           
    }
    let test = [[1,2],[3,4],5,6]
    console.log(failSum)
})
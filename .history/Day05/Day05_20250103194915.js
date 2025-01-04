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

    const orderList = (update, rules) => {
      //97,13,75,29,47
      const dic = {};
      const ordered = [];
    
      update.forEach((page) => {
        dic[page] = rules
          .filter((rule) => rule[0] === page)
          .map((rule) => rule[1])
          .filter((rule) => update.includes(rule));
      });
    
      while (Object.keys(dic).length) {
        // Find the key with an empty array
        const lastPage = Object.keys(dic).find((key) => dic[key].length === 0);
    
        // Remove the key from all values
        for (const key in dic) {
          dic[key] = dic[key].filter((item) => item !== lastPage);
        }
    
        // Remove the key-value pair from the dictionary
        delete dic[lastPage];
    
        ordered.unshift(lastPage);
      }
    
      return ordered;
    };

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
          update = orderList(pgPrints[i], pgRules);
            midIndex = Math.floor(update.length/2);
            failSum += parseInt(update[midIndex])
                
        }
           
    }
    let test = [[1,2],[3,4],5,6]
    console.log(pgPrints)
})
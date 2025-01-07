fs = require('fs')

fs.readFile('./Day05/input.txt', 'utf-8', (err, data) => {
    let [pgRules, pgPrints] = data.split('\n\n');
    pgRules = pgRules.split('\n').map((rule) => rule.split('|'));
    pgPrints = pgPrints.split('\n').map((pgSet) => pgSet.split(','))
    
    let sum = 0;
    let failSum = 0;

    const orderList = (update, rules) => {
      const ordered = []
      const pageMap = {}
      
      update.forEach((page) => {
        pageMap[page] = rules
          .filter((rule) => rule[0] === page)
          .filter((rule) => update.includes(rule[1]))
          .map((rule) => rule[1])
      })
 
      while(Object.keys(pageMap).length){
        const lastPg = Object.keys(pageMap).find((key) => pageMap[key].length == 0);

        for (const page in pageMap){
          pageMap[page] = pageMap[page].filter((page) => page !== lastPg)
        }

        delete pageMap[lastPg]

        ordered.unshift(lastPg);
      }

      return ordered;

      };

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

    for(let i=0; i<pgPrints.length;i++){
        if(isOrdered(pgPrints[i],pgRules)){
          midIndex = Math.floor(pgPrints[i].length/2);
          sum += parseInt(pgPrints[i][midIndex])
        }
        
        else {
            //let orderedList = orderList(pgPrints[i],pgRules)
            let orderedList = pgPrints[i]
            for (let i = 0; i < orderedList.length - 1; i++){
              for(let j = i+1; j < orderedList.length; j++){
               let testPgs = [orderedList[j],orderedList[i]]
               if(containsArray(pgRules, testPgs)){
                let first = orderedList[j]
                let second = orderedList[i]

                orderedList[i] = first
                orderedList[j] = second
               }
              }
            }
            midIndex = Math.floor(orderedList.length/2);
            failSum += parseInt(orderedList[midIndex])
                
        }
           
    }

    console.log(failSum)
})
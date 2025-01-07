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

    const orderList = (update, rules) => {
      const ordered = []
      const pageMap = {}
      
      update.forEach((page) => {
        pageMap[page] = rules
          .filter((rule) => rule[0] === page)
          .filter((rule) => update.includes(rule[1]))
          .map((rule) => rule[1])
      })
 
      while(Object.keys(pageMap).length > 0){
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

    for(let i=0; i<pgPrints.length - 1;i++){
        if(isOrdered(pgPrints[i],pgRules)){
          midIndex = Math.floor(pgPrints[i].length/2);
          sum += pgPrints[i][midIndex]
        }
        
        else {
            let orderedList = orderList(pgPrints[i],pgRules)
            midIndex = Math.floor(orderedList.length/2);
            failSum += orderedList[midIndex]
                
        }
           
    }
    let test = [[1,2],[3,4],5,6]
    console.log(failSum)
})
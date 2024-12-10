var fs =  require('fs');

fs.readFile('./Day01/input.txt', 'utf-8', (err, data) => {
    const arr = data.split('\n').map((row)=>row.split('   ')); 
    let sum = 0
    const left = arr.map(([left]) => +left).sort();
    const right = arr.map(([,right]) => +right).sort();
    
    for (i=0; i<left.length; i++){
        sum += Math.abs(left[i] - right[i])
    }


    let simMap = {};


    left.map((num) => {
        if (!simMap[num]){
            simMap[num] = 0;
        }
    })

    right.map((num) => {
        let str= num.toString() 
        if (simMap[num] != undefined){
             simMap[num] += 1;
         }
     })
     let simSum = 0;
     left.map((num) => {
        simSum += simMap[num] * num;
     })
    console.log(simSum);
})





fs = require('fs')

fs.readFile('./Day02/input.txt', 'utf-8', (err, data) => {
    const arr = data.split('\n').map((row) => row.split(' ').map((item) => parseInt(item)));
    let safeMap = {
        'safe': 0,
        'unsafe': 0
    }
    function isSafe(row){
        let isSafe = true;
        let status = {
            'increasing': undefined,
            'decreasing': undefined
        }
        for (let i=0;i<row.length-1;i++){
                if ((row[i] - row[i+1] == 0) || (Math.abs(row[i]-row[i+1]) > 3)){
                    isSafe = false;
                    break;
                }
                if (row[i] > row[i+1]){
                    status.decreasing = true;
                }
                if (row[i] < row[i+1]){
                    status.increasing = true;
                }
                if (status.increasing == status.decreasing){
                    isSafe = false;
                }
                
        }
    
        return isSafe;
    }
    function problemDampener(row){
        if (isSafe(row) == false){
            for (let i = 0; i < row.length; i++){
                if (isSafe(row.toSpliced(i,1)) == true){
                    safeMap.safe += 1;
                    safeMap.unsafe -= 1;
                    break;
                }
            }
        }
    }
    arr.map((row) => {
        if(isSafe(row)){
            safeMap.safe += 1;
    }
        else {
            safeMap.unsafe += 1;
        }
    problemDampener(row)
    })
    console.log(
        `Safety Testing Results: 
    Safe: ${safeMap.safe}
    Unsafe: ${safeMap.unsafe}`)})



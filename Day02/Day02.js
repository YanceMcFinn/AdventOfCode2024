var fs = require('fs');

fs.readFile('./Day02/input.txt', 'utf-8', (err, data) => {
    const arr = data.split('\n').map((row) => row.split(' ').map((item) => parseInt(item)))
    console.log(arr);
    let safeMap = {
        'safe': -1,
        'unsafe': 0
    }
    arr.map((row) => {
        let isSafe = true;
        let status = {
            'increasing': undefined,
            'decreasing': undefined
        }
        for (let i=0;i<row.length-1;i++){
                if ((row[i] - row[i+1] == 0) || (Math.abs(row[i]-row[i+1]) > 3)){
                    isSafe = false;
                    break
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
        if(isSafe == false){
            safeMap.unsafe += 1;
        }
        else {
            safeMap.safe += 1;
        }
       
    })
    console.log(safeMap)
})    
var fs =  require('fs');

fs.readFile('./Day04/input.txt', 'utf-8', (err, data) => {
    const search = data.split('\n').map((row)=>row.split(''));

    let matches = 0;
    let MAS_matches = 0;

    search.map((row,i) => {
        row.map((letter,j)=>{
        if(letter == 'X'){
            let up = '';
            let down = '';
            let left = '';
            let right = '';
            let upLeft = '';
            let upRight = '';
            let dnLeft = '';
            let dnRight = '';
            

            if (i>=3){
                up = letter.concat(search[i-1][j], search[i-2][j], search[i-3][j])
            }
            
            if (i<=search.length-4){
                down = letter.concat(search[i+1][j], search [i+2][j], search[i+3][j])
            }
            
            if (j >= 3){
                left = letter.concat(search[i][j-1], search[i][j-2], search [i][j-3])
            }
            
            if (j <= row.length - 4){
                right = letter.concat(search[i][j+1], search[i][j+2], search [i][j+3])
            }

            if(i >= 3 && j >= 3){
                upLeft = letter.concat(search [i-1][j-1], search[i-2][j-2], search[i-3][j-3])
            }
            
            if(i >= 3 && j <= row.length-4){
                upRight = letter.concat(search [i-1][j+1], search[i-2][j+2], search[i-3][j+3])
            }
            
            if(i <= search.length-4 && j >= 3){
                dnLeft = letter.concat(search [i+1][j-1], search[i+2][j-2], search[i+3][j-3])
            }

            if(i <= search.length-4 && j <= row.length-4){
                dnRight = letter.concat(search [i+1][j+1], search[i+2][j+2], search[i+3][j+3])
            }

            
            if (up == "XMAS"){
                matches += 1;
            };
            if (down == "XMAS"){
                matches += 1;
            };
            if (left == "XMAS"){
                matches += 1;
            };
            if (right == "XMAS"){
                matches += 1;
            };
            if (upLeft == "XMAS"){
                matches += 1;
            };
            if (upRight == "XMAS"){
                matches += 1;
            };
            if (dnLeft == "XMAS"){
                matches += 1;
            };
            if (dnRight == "XMAS"){
                matches += 1;
            };
        }

        if (letter == 'A' && (i>=1 && i < search.length -2) && (j >= 1 && j < row.length-2)){
            
            let diag1 = false;
            let diag2 = false;

            if ((search[i-1][j-1] == 'S' && search[i+1][j+1] == 'M') || (search[i-1][j-1] == 'M' && search[i+1][j+1] == 'S')){
                diag1 = true;
            }

            if ((search[i-1][j+1] == 'S' && search[i+1][j-1] == 'M') || (search[i-1][j+1] == 'M' && search[i+1][j-1] == 'S')){
                diag2 = true;
            }

            if (diag1 == true && diag2 == true){
                MAS_matches += 1;
            }

        }

        })
    })
console.log(MAS_matches)})

const fs = require('fs');
const input = fs.readFileSync('./input.txt', 'utf8'); 
 

rows = input.split('\r\n').map(row => row.split(''));
console.log(rows);

let resultSet = []

for (let row = 0; row <  rows.length; row++) {
    const r = rows[row];
    for (let col = 0; col <  r.length; col++) {
        const _v = rows[row][col];
        const currentTree = [row, col];

            if(currentTree[0] !== 1 || currentTree[1] !== 2){
              //console.log("skipping");
             //continue;
            } 

        let treeCount_l = 0;
        let treeCount_r = 0;
        let treeCount_u = 0;
        let treeCount_d = 0;
 
        for (let index = currentTree[1] -1 ; index >= 0; index--) {  
            const element = rows[currentTree[0]][index]; 
            treeCount_l++;
            if(element >= _v)
            { 
                break;
            }
        }
        
        // check right
        currentTallestTree = -1;
        for (let index = currentTree[1] + 1; index < r.length; index++) {
            const element = rows[currentTree[0]][index];
            ////console.log(currentTree,`element: ${element}`);
            
            treeCount_r++;
            if(element >= _v)
            { 
                break;
            }
        } 

        // check down  
        for (let index = currentTree[0] +1 ; index < rows.length; index++) {
            const element = rows[index][currentTree[1]]; 
            treeCount_d++;
            if(element >= _v)
            { 
                break;
            }
        } 


        // check up 
        for (let index = currentTree[0] - 1; index >= 0; index--) {
            const element = rows[index][currentTree[1]]; 
            treeCount_u++;
            if(element >= _v)
            {   
                break;
            } 
        } 
 
        resultSet.push([currentTree, [treeCount_l, treeCount_r, treeCount_u, treeCount_d]]);   
             
    } 
}

console.log(resultSet);
var calcScore = resultSet.map((item) => {
    return [item[0], item[1][0] * item[1][1] * item[1][2] * item[1][3]]
})
//console.log(calcScore);
//console.log(calcScore.sort((a,b) => b[1] - a[1]));
console.log(calcScore.sort((a,b) => b[1] - a[1])[0]);
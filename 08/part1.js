const fs = require('fs');
const input = fs.readFileSync('./input.txt', 'utf8'); 
 

rows = input.split('\r\n').map(row => row.split(''));

//console.log(rows); 
let visableTrees = []//new Set(); 

let rowTotal_lr = 0;
rows.forEach((element, _r) => {
    let currentTallestTree = -1; 
    working_rowTotal_lr = 0;
    element.forEach((v, _c) => {
        if(v > currentTallestTree){
            working_rowTotal_lr++;
            currentTallestTree = v; 
            // console.log(`from left. adding ${_r},${_c}`, v)
            visableTrees.push(`${_r},${_c}`);
        }
    });
    rowTotal_lr += working_rowTotal_lr; 
}); 
console.log("----") 
 

let rowTotal_rl = 0;
rows.forEach((element, _r) => {
    let currentTallestTree = -1;
    element.reverse(); 
    working_rowTotal_rl = 0;
    element.forEach((v, _c) => {
        if(v > currentTallestTree){
            working_rowTotal_rl++;  
            currentTallestTree = v; 
            // console.log(`from right. adding ${_r},${element.length - _c - 1}`, v)
            visableTrees.push(`${_r},${element.length - _c - 1}`);
        }
    });
    element.reverse(); 
    rowTotal_rl += working_rowTotal_rl; 
}); 
 
console.log("----") 

let rowTotal_tb = 0;
for (let col = 0; col < rows[0].length; col++) { 
     
    let currentTallestTree = -1;
    working_rowTotal_tb = 0;

    for (let r = 0; r < rows.length; r++) { 
        const v = rows[r][col];  
         
        if(v > currentTallestTree){
            working_rowTotal_tb++; 
            currentTallestTree = v; 
            // console.log(`from top. adding ${r},${col}`, v)
            visableTrees.push(`${r},${col}`);
        }
    }
    rowTotal_tb += working_rowTotal_tb; 
} 
 
console.log("----")
let rowTotal_bt = 0;
for (let col = 0; col < rows[0].length; col++) { 

    let currentTallestTree = -1;
    working_rowTotal_bt = 0;
    for (let r = rows.length -1; r >=0; r--) {
        const v = rows[r][col];  
        if(v > currentTallestTree){
            working_rowTotal_bt++; 
            currentTallestTree = v; 
            // console.log(`from bottom. adding ${r},${col}`, v)
            visableTrees.push(`${r},${col}`);
        }
    }  
    rowTotal_bt += working_rowTotal_bt;
} 
var x = Array.from(visableTrees);
console.log("visableTrees",  x.length);  
console.log("visableTrees set", (new Set(x)).size);  

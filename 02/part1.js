var input = require('./input.js'); 
//console.log(input);

var inputArray = input.split('\n').map(x => [x[0],x[2]]);
//console.log(inputArray);

var scoreFromChoice = inputArray.reduce((acc, cur) => {
    if (cur[1] === 'X') {
        return acc + 1;
    }
    if (cur[1] === 'Y') {
        return acc + 2;
    }
    if (cur[1] === 'Z') {
        return acc + 3;
    }
    return acc;
}, 0);

console.log(scoreFromChoice);

var scoreFromResult = inputArray.reduce((acc, cur) => {
    if (cur[0] === 'A' && cur[1] === 'Y') {  
        return acc + 6;
    }
    if (cur[0] === 'B' && cur[1] === 'Z') {  
        return acc + 6;
    }
    if (cur[0] === 'C' && cur[1] === 'X') {  
        return acc + 6;
    }
    if(cur[0] === 'A' && cur[1] === 'X' || cur[0] === 'B' && cur[1] === 'Y' || cur[0] === 'C' && cur[1] === 'Z') { 
        return acc + 3;
    }
    return acc;
},0);

console.log(scoreFromResult);
console.log(scoreFromChoice + scoreFromResult);
var input = require('./input.js'); 
//console.log(input);

var inputArray = input.split('\n').map(x => [x[0],x[2]]);
//console.log(inputArray);

var getScoreFromChoice = (choice) => {
    if (choice === 'X') {
        return 1;
    }
    if (choice === 'Y') {
        return 2;
    }
    if (choice === 'Z') {
        return 3;
    }
    return 0;
}

var scoreFromChoice = inputArray.reduce((acc, cur) => { 
    if(cur[1] === 'X') {
        switch(cur[0]) {
            case 'A':
                return acc + getScoreFromChoice('Z');
            case 'B':
                return acc + getScoreFromChoice('X');
            case 'C':
                return acc + getScoreFromChoice('Y');
            default :
                return acc;
        }
    }
    if(cur[1] === 'Y') {
        switch(cur[0]) {
            case 'A':
                return acc + getScoreFromChoice('X');
            case 'B':
                return acc + getScoreFromChoice('Y');
            case 'C':
                return acc + getScoreFromChoice('Z');
            default :
                return acc;
        }
    }
    if(cur[1] === 'Z') {
        switch(cur[0]) {
            case 'A':
                return acc + getScoreFromChoice('Y');
            case 'B':
                return acc + getScoreFromChoice('Z');
            case 'C':
                return acc + getScoreFromChoice('X');
            default :
                return acc;
        }
    }
    return acc; 
}, 0);

console.log(scoreFromChoice);


var scoreFromResult = inputArray.reduce((acc, cur) => {
    if(cur[1] === 'Y') {
        return acc + 3;
    }
    if(cur[1] === 'Z') {
        return acc + 6;
    }
    return acc; 
},0);

console.log(scoreFromResult);
console.log(scoreFromChoice + scoreFromResult);
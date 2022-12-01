var input = require('./input.js'); 

//split input to a array or arrays, each element in array is an elf, each elf array is a food item
var arrayPerElf = input.split("\n\n").map(x => x.split("\n").map(x => parseInt(x)))

//sum each elfs food array (and remove NaN)
var totalArrayPerElf = arrayPerElf.map( x => x.reduce((pre, cur) => pre + cur),0).filter(x => !isNaN(x))

result = 0;
numOfElves = 3
for(var x=1; x <= numOfElves; x++){
    //get current max value from array
    var maxValue = Math.max(...totalArrayPerElf)  
    var indexOfMax = totalArrayPerElf.indexOf(maxValue)

    //add max value to result running total
    result = result + maxValue; 
    //remove max from array now its been processed
    totalArrayPerElf.splice(indexOfMax, 1) 
}

console.log(`Total for top ${numOfElves} elves` , result )
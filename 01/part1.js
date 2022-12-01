var input = require('./input.js'); 
//split input to a array or arrays, each element in array is an elf, each elf array is a food item
var arrayPerElf = input.split("\n\n").map(x => x.split("\n").map(x => parseInt(x)))

//sum each elfs food array (and remove NaN)
var totalArrayPerElf = arrayPerElf.map( x => x.reduce((pre, cur) => pre + cur),0).filter(x => !isNaN(x))
 
var maxValue = Math.max(...totalArrayPerElf) 
console.log("MaxValue" , maxValue )
 


var input = require('./input.js'); 

var pairs = input.split('\n').map(x => x.split(',').map(y => {
    return {min: parseInt(y.split('-')[0]), max: parseInt(y.split('-')[1])};
}));


console.log(pairs);
var fullyOverlappedPairs = [];
pairs.forEach((pair, index) => {
    var elf1 = pair[0];
    var elf2 = pair[1];
    console.log(`pair ${index}: ${elf1.min}-${elf1.max} ${elf2.min}-${elf2.max}`);
    if(elf1.min >= elf2.min && elf1.min <= elf2.max) {
        console.log('elf 1 overlaps 2');
        fullyOverlappedPairs.push(pair);
    }
    else if (elf1.max >= elf2.min && elf1.max <= elf2.max) {
        console.log('elf 1 overlaps 2');
        fullyOverlappedPairs.push(pair);
    }
    else if(elf2.min >= elf1.min && elf2.min <= elf1.max) {
        console.log('elf 2 overlaps 1');
        fullyOverlappedPairs.push(pair);
    }
    else if (elf2.max >= elf1.min && elf2.max <= elf1.max) {
        console.log('elf 2 overlaps 1');
        fullyOverlappedPairs.push(pair);
    }
 
   

});

console.log(fullyOverlappedPairs.length);


//2mins 30secs

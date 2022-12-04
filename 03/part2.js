var input = require('./input.js'); 
 
var backpackArray = input.split('\n'); 

const resultsArray = [];
for (let i = 0; i < backpackArray.length; i=i+3) {
    const a = [backpackArray[i], backpackArray[i+1], backpackArray[i+2]];
    console.log(a)

    for (let line = 0; line < a[0].length; line++) {
                const left = a[0][line];
                // console.log(left);
                
                if(a[1].includes(left) && a[2].includes(left)) {
                    console.log("found a match", left);
                    resultsArray.push(left);
                    break;
                }
            }
}

const resultsNumArray = [];

resultsArray.map(item => {
    console.log(item);

    if(item.charCodeAt(0) > 96) {
        // console.log("lowercase");
        resultsNumArray.push(item.charCodeAt(0) - 96);
        // console.log(`lowercase ${item}`, item.charCodeAt(0) - 96);
    }
    if(item.charCodeAt(0) < 97) {
        // console.log("uppercase");
        resultsNumArray.push(item.charCodeAt(0) - 64 + 26) ;
        // console.log(`uppercase ${item}`, item.charCodeAt(0) - 64 + 26);
    }
})

console.log(resultsNumArray.reduce((a, b) => a + b, 0));

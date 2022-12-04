var input = require('./input.js'); 

var rawbackpackArray = input.split('\n');

var backpackArray = rawbackpackArray.map(x => [x.substring(0, x.length/2), x.substring(x.length/2)]);

var resultsArray = [];
var resultsNumArray = [];

backpackArray.map(item => {
    leftSection = item[0];
    rightSection = item[1];
    console.log("leftSection", leftSection);
    console.log("rightSection", rightSection);


    for (let letter = 0; letter < leftSection.length; letter++) {
        const left = leftSection[letter];
          
        if(rightSection.includes(left)) {
            console.log("found a match", left);
            resultsArray.push(left);
            break;
        }
    }
}) 


console.log("resultsArray",resultsArray.length);


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

console.log("a".charCodeAt(0));
console.log("z".charCodeAt(0));

console.log("A".charCodeAt(0));
console.log("Z".charCodeAt(0));

console.log("resultsArray count", resultsArray.length);
console.log("rawbackpackArray count", rawbackpackArray.length);
console.log("backpackArray count", backpackArray.length);
console.log(resultsNumArray);
console.log(resultsNumArray.reduce((a, b) => a + b, 0));


//39mins 23secs
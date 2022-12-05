const fs = require('fs');
const input = fs.readFileSync('./input.txt', 'utf8'); 

console.log("input", input);

const rawStack = input.split('\r\n\r\n')[0].split('\n'); 

console.log("rawStack", rawStack);

const rawProcedure = input.split('\r\n\r\n')[1].split('\n');

rawStack.pop()

console.log(rawStack);
//console.log(rawProcedure);

let formattedStack = new Array(9).fill("");
console.log("formattedStack", formattedStack); 

for (let i = 0; i < rawStack.length; i++) {
    const currentLine = rawStack[i];
    console.log("currentLine", currentLine);

    for (let j = 0; j < rawStack[i].length; j = j+4) {  
        const fIndex = Math.floor( j/4)
        console.log("fIndex", fIndex);
        console.log("j", j);
        // console.log("length", rawStack[i].length);
        // console.log("j", j);
        // console.log("currentletter", rawStack[i][j+1]); 
        
        if(rawStack[i][j+1] !== ' ') {
            const currentLetter = rawStack[i][j+1];
            // console.log("adding to array", rawStack[i][j+1] );
            // console.log("formattedStack", formattedStack);
            const newValue = formattedStack[fIndex] + rawStack[i][j+1];  
            formattedStack[fIndex] = formattedStack[fIndex] + rawStack[i][j+1]; 
        }
    }

}

console.log("formattedStack", formattedStack);
 

formattedStack = formattedStack.map(x => x.split(''));


const rearrange = (rawProcedure, formattedStack) => {

    rawProcedure.forEach((element, index) => {
        // if(index > 5){
        //     return;
        // }
        console.log("element", element);
        let sections = element.split(' ');
        let numOfCratesToMove = parseInt(sections[1]);
        let sourceIndex = parseInt(sections[3]) -1;
        let destinationIndex = parseInt(sections[5]) -1;

        // if(!formattedStack[sourceIndex][0] || formattedStack[sourceIndex][0] == ' '){
        //     console.log("Source is empty", formattedStack[sourceIndex]);
        //     return;
        // }
 
        for (let i = 0; i < numOfCratesToMove; i++) {  
            console.log("------------------");
            console.log("Source Array", formattedStack[sourceIndex]);
            const removeEle = formattedStack[sourceIndex].shift();
            console.log("removed Element", removeEle);
            console.log("New source Array", formattedStack[sourceIndex]);
            
            console.log("Dest Array", formattedStack[destinationIndex]);
            if(removeEle){
                formattedStack[destinationIndex].unshift(removeEle);
            }
            console.log("New dest Array", formattedStack[destinationIndex]);
            
        }


    });
    

}



rearrange(rawProcedure, formattedStack);




console.log("formattedStack (end)", formattedStack);
console.log(formattedStack.map(x =>x[0]).join(''));

//1h 16m 29s
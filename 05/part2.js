const fs = require('fs');
const input = fs.readFileSync('./input.txt', 'utf8'); 
 
 
const rawStack = input.split('\r\n\r\n')[0].split('\n').map(x => x.replace('\r', '')); 
rawStack.pop()
console.log("rawStack", rawStack);

const rawProcedure = input.split('\r\n\r\n')[1].split('\n').map(x => x.replace('\r', '')); 
console.log("rawProcedure", rawProcedure);

 

let formattedStack = new Array(9).fill("");
console.log("formattedStack", formattedStack); 

for (let i = 0; i < rawStack.length; i++) {
    const currentLine = rawStack[i];
    console.log("currentLine", currentLine);

    for (let j = 0; j < rawStack[i].length; j = j+4) {  
        const fIndex = Math.floor( j/4) 
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
console.log("//////////////////////////");
console.log("formattedStack", formattedStack);
    rawProcedure.forEach((element, index) => {
        //  if(index > 2){
        //      return;
        //  }
        if(!element){
             return;
        }
        console.log("instruction: ", element);
        let sections = element.split(' ');
        let numOfCratesToMove = parseInt(sections[1]);
        let sourceIndex = parseInt(sections[3]) -1;
        let destinationIndex = parseInt(sections[5]) -1;


        console.log("current source",  formattedStack[sourceIndex]);
        console.log("current dest",  formattedStack[destinationIndex]);
 
  

        const crateStack = formattedStack[sourceIndex].slice(0,numOfCratesToMove);
        const newFormattedStack = formattedStack[sourceIndex].slice(numOfCratesToMove);

        console.log("newFormattedStack", newFormattedStack);
        formattedStack[sourceIndex] = newFormattedStack;
       
        formattedStack[destinationIndex] = crateStack.concat( formattedStack[destinationIndex]);
    
        console.log("new source",  formattedStack[sourceIndex]);
        console.log("new dest",  formattedStack[destinationIndex]);
        


    });
    

}



rearrange(rawProcedure, formattedStack);




console.log("formattedStack (end)", formattedStack);
console.log(formattedStack.map(x =>x[0]).join(''));

//1h 16m 29s
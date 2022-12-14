const fs = require('fs');
const input = fs.readFileSync('./input.txt', 'utf8'); 

const commands = input.split('\r\n').map((command) => ({direction: command.split(' ')[0], moves: parseInt(command.split(' ')[1])}) );
//console.log(commands);

const startPos = {x:0,y:0};
let hPos = {x:0,y:0};
let tPos1 = {x:0,y:0};
let tPos2 = {x:0,y:0};
let tPos3 = {x:0,y:0};
let tPos4 = {x:0,y:0};
let tPos5 = {x:0,y:0};
let tPos6 = {x:0,y:0};
let tPos7 = {x:0,y:0};
let tPos8 = {x:0,y:0};
let tPos9 = {x:0,y:0};
let tPostions = new Set();

function move(head, tail, command, log) {    
    if(log) { 
        // console.log("move start ----"); 
        // console.log("T:H ",tail, head); 
    }
    const dx =  head.x - tail.x ;
    const dy =  head.y - tail.y ;


    if (Math.abs(dx) > 1) {
        tail.x += dx > 0 ? 1 : -1;
        if (Math.abs(dy) != 0) tail.y += dy > 0 ? 1 : -1;
      } else if (Math.abs(dy) > 1) {
        tail.y += dy > 0 ? 1 : -1;
        if (Math.abs(dx) != 0) tail.x += dx > 0 ? 1 : -1;
      }

return;
    if(xDiff > 1 || yDiff > 1) {
        //on the same row 
        if(head.y == tail.y) {
            tail.x += (command.direction === 'L') ? -1 : 1;
        }else if(head.x == tail.x){
            //same column
                tail.y += (command.direction === 'D') ? -1 : 1;
        } else{
            if(head.x > tail.x) {
                tail.x += 1;
            }else{
                tail.x -= 1;
            }
            if(head.y > tail.y) {
                tail.y += 1;
            }else{
                tail.y -= 1;
            }
        }
    }
    if(log) { 
        // console.log("T:H ",tail, head);
        // console.log("move end----"); 
        
    }
    return; 
}
function printGrid(itemArray) {
    const xAdjust = Math.abs(Math.min(...itemArray.map((item) => item[0])));
    const yAdjust = Math.abs(Math.min(...itemArray.map((item) => item[1])));

    const items = Array.from(itemArray);
    //console.log("printGrid");
    //console.log(items) 
    const gridSize = 7;
    const grid = new Array(5).fill(0).map(() => new Array(6).fill('.'));
    
    grid[startPos[0]][startPos[1]] = "S";
    //console.log(grid);
    items.forEach((item) => { 
       // console.log("set: ",item.index.toString(),"at: ",item.x,item.y);
        grid[item.y  ][item.x ] = item.index == 0 ?"H" : item.index.toString();
     
    });

   //console.log(grid);

    const stringGrid = grid.reverse().map((row) => row.join('')).join('\r\n');
    console.log(stringGrid);  
    console.log("\r");
}

 

//add origin
tPostions.add({...tPos9});
console.log("---- start ----");
//printGrid([startPos,startPos].map((v,i) => ({index: i, x: v[0], y: v[1]})));
commands.forEach((command,i) => {
     if(i >0 ) {
        // return;
     }
    console.log(` == ${command.direction} ${command.moves} == `);
    tPostions.add({...tPos9});
    for (let m = 0; m < command.moves; m++) {
        //console.log("moving: ",command.direction);
        //move H 
        switch (command.direction) {
            case 'U':
                hPos.y += 1;
                break;
            case 'D':
                hPos.y -= 1;
                break;
            case 'L':
                hPos.x -= 1;
                break;
            case 'R':
                hPos.x += 1;
                break;
        }
        

        move(hPos, tPos1, command,  );
        move(tPos1, tPos2, command, );
        move(tPos2, tPos3, command, );
        move(tPos3, tPos4, command,);
        move(tPos4, tPos5, command, );
        move(tPos5, tPos6, command, );
        move(tPos6, tPos7, command, );
        move(tPos7, tPos8, command, );
        tPostions.add({...tPos9});
        move(tPos8, tPos9, command, true);
        tPostions.add({...tPos9});
        // console.log("----");
        // //console.log("add to tPostions",tPos9); 
        // console.table(tPostions);
        //printGrid([hPos,tPos1].map((v,i) => ({index: i, x: v[0], y: v[1]})));
         
        //printGrid([hPos,tPos1,tPos2,tPos3,tPos4,tPos5,tPos6,tPos7,tPos8,tPos9].map((v,i) => ({index: i, x: v[0], y: v[1]}))); 
         
  
  }
    //console.log("///////////");
});
console.log("tPostions: ",[...(new Set([...tPostions].map( x => x.x + "|" + x.y)))].length );
//console.log("tPostions: ",[...tPostions].map((v) => [parseInt(v.split('|')[0]),parseInt(v.split('|')[1])]));
//console.log("tPostions: ",[...tPostions].map((v) => [parseInt(v.split('|')[0]),parseInt(v.split('|')[1])]).length);
//console.log(tPostions.size);

//53min 53sec
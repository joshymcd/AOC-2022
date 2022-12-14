const fs = require('fs');
const input = fs.readFileSync('./input.txt', 'utf8'); 

const commands = input.split('\r\n').map((command) => ({direction: command.split(' ')[0], moves: parseInt(command.split(' ')[1])}) );
console.log(commands);

const startPos = [0,0];
let hPos = [0,0];
let tPos = [0,0];
let tPostions = new Set();

commands.forEach((command) => {
    for (let m = 0; m < command.moves; m++) {
        console.log("movinsg: ",command.direction);
        //move H 
        switch (command.direction) {
            case 'U':
                hPos[1] += 1;
                break;
            case 'D':
                hPos[1] -= 1;
                break;
            case 'L':
                hPos[0] -= 1;
                break;
            case 'R':
                hPos[0] += 1;
                break;
        }
        console.log("H: ",hPos);

        //move T 
        const xDiff = Math.abs(hPos[0] - tPos[0]);
        const yDiff = Math.abs(hPos[1] - tPos[1]);
        if(xDiff > 1 || yDiff > 1) {  

            if(command.direction === 'L' || command.direction === 'R') {
                //Move same way as H
                tPos[0] += (command.direction === 'L') ? -1 : 1;
                //if not on same Y, move towards H
                if(tPos[1] !== hPos[1]) {
                    tPos[1] += (tPos[1] < hPos[1]) ? 1 : -1;
                }
            }else{
                //Move same way as H
                tPos[1] += (command.direction === 'D') ? -1 : 1;
                //if not on same X, move towards H
                if(tPos[0] !== hPos[0]) {
                    tPos[0] += (tPos[0] < hPos[0]) ? 1 : -1;
                }
            }
        }
        console.log("T: ",tPos); 
        console.log("----");
        console.log("add to tPostions",tPos);
        tPostions.add(tPos[0] + "-" + tPos[1]);
         
    }
});
console.log("tPostions: ",tPostions);
console.log(tPostions.size);

//53min 53sec
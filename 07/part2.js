const fs = require('fs');
const input = fs.readFileSync('./input.txt', 'utf8'); 

const lines = input.split('\r\n'); 

let currentDir = '';
let files = [];
lines.forEach((v, i) => { 
    if (v.startsWith('$')) {
        //Command
        const command = v.split(' ')[1];
        const value = v.split(' ')[2];

        if (command === 'cd') {
            console.log("value", value);
            if(value === '/') {
                currentDir = '';
            }
            else if (value === '..') {
                const dirs = currentDir.split('/');
                dirs.pop();
                currentDir = dirs.join('/');
            }else{
                 
                const dirs = currentDir.split('/') 
                dirs.push(value);
                currentDir = dirs.join('/');
            } 

             

            if(!files.find(x => x.path === currentDir)) { 
               files.push({path: currentDir, files: [], totalSize: 0});
            }
        }
    }else{
        const p1 = v.split(' ')[0];
        const p2 = v.split(' ')[1];

        if(p1 === 'dir') {
             
        }else{
            const file = files.find(x => x.path === currentDir);
            if(file) {
                file.files.push({size: p1, name: p2});
            }
        }
    }  
}); 

files.forEach((v, i) => { 
    var totalSize = files.map(x =>{   
        if(x.path.startsWith(v.path == '' ? '/': v.path)) {
            return x.files.map(y => parseInt(y.size)).reduce((a, b) => a + b, 0);
        }else{
            return 0;
        }
    }).reduce((a, b) => a + b, 0);
   //console.log("totalSize",totalSize);
   v.totalSize = totalSize;
})

console.log("files",files);


const totalSize = files.find(x => x.path === '').totalSize;
console.log("totalSize",totalSize);
const freeSpace = 70000000 - totalSize;
console.log("freeSpace",freeSpace);
const reqSpace = 30000000 - freeSpace;
console.log("reqSpace",reqSpace);

const sortedFiles = files.sort((a, b) => a.totalSize - b.totalSize).filter(x => x.totalSize >= reqSpace)[0];
console.log("sortedFiles",sortedFiles);

//6m 26s
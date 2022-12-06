const fs = require('fs');
const input = fs.readFileSync('./input.txt', 'utf8'); 


for (let i = 0; i < input.length  -3; i++) {
  var currentMarker = [input[i] , input[i + 1] , input[i + 2] , input[i + 3]];
  console.log(currentMarker);
  
  var set = new Set(currentMarker);
  if (set.size === currentMarker.length) {
    console.log('Found a non-duplicate!', currentMarker);
    console.log("index: " + i);
    console.log("start position", i + 1)
    console.log("end position", i + 3 +1)

    return;
  }

}

//7min 5sec
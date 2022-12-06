const fs = require('fs');
const input = fs.readFileSync('./input.txt', 'utf8').split(''); 

var distSize = 14
for (let i = 0; i < input.length ; i++) { 
    console.log("i",i);
  var currentMarker = input.filter((v , index) => (index >= i && index < i +distSize)) //[input[i] , input[i + 1] , input[i + 2] , input[i + 3]];
  
  
  var set = new Set(currentMarker);
  if (set.size === currentMarker.length) {
    console.log('Found a non-duplicate!', currentMarker);
    console.log("index: " + i);
    console.log("start position", i + 1)
    console.log("end position", i + distSize )
    return;
  }

}

//13min 58sec
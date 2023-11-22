const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    str1 = input[0];
    str2 = input[1];
    strx = str1+str2;
    if(2<= strx.length && strx.length <= 20) {
            console.log(strx);
    }
    
    
});
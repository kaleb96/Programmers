const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const intA = Number(input[0]);
    const intB = Number(input[1]);
    
    if((intA >= -100000 && intA <= 1000000) && (intB >= -1000000 && intB <= 1000000)) {
        console.log('a = '+ intA + '\n' + 'b = ' + intB);
    }
});
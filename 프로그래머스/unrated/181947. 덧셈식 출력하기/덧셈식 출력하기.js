const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    let a = Number(input[0]);
    let b = Number(input[1]);
    
    if((a>=1 && a<=100) && (b>=1 && b<=100)) {
        console.log(a+ ' + ' +b+ ' = ' + (a+b));
    }
});

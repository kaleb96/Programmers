const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let result = "";
rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    str = input[0];
    n = Number(input[1]);
    
    if((str.length >= 1 && str.length <= 10) && (n >= 1 && n <= 5)) {
        // console.log(Array(n).fill(str).join(""));
        // console.log(str.repeat(n));
        for(let i = 0; i< n; i++) {
            result = result + str;
        }
        console.log(result);
    }
    
});
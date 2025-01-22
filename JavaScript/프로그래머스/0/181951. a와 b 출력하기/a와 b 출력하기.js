const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    input.forEach((v, idx) => {
        const name = idx === 0 ? 'a' : 'b';
        console.log(`${name} = ${v}`)
    })
});
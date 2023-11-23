const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0].split('');
    if(1<= str.length && str.length <=10) {
        str.forEach((value, idx) => {
        console.log(value);
    })
    }

});
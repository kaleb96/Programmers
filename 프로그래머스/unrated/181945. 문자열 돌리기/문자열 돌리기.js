const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    // forEach 문
    // str = input[0].split('');
    // if(1<= str.length && str.length <=10) {
    //     str.forEach((value, idx) => {
    //     console.log(value);
    //     })
    // }
   
    // ES6 spread 연산자
    // str = input[0];
    // [...str].forEach(c => console.log(c));
    
    // for...of 문
    str = input[0]
    for(let i of str) {
        console.log(i);
    }
    
});
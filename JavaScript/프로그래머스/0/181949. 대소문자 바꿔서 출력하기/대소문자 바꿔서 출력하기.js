function strConverter(str) {
    
    if(str === str.toUpperCase()) { // Upper -> Lower
        return str.toLowerCase();
    } else { // Lower -> Upper
        return str.toUpperCase();
    }
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    let result = '';
    [...str].forEach((v) => {
        result += strConverter(v);
        
    })
    console.log(result)
});


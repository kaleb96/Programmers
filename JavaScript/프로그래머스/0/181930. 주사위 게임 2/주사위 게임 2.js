function mathPow(dices, pow = 1) {
    let result = 1;
    const [ a, b, c ] = dices; 
    for(let i = 1; i <= pow; i++) {
        result *= Math.pow(a, i) + Math.pow(b, i) + Math.pow(c, i);
    }
    return result;
}

function solution(a, b, c) {
    
    const diceSet = new Set([a, b, c]);
    const dices = [...diceSet];
    const diceLen = dices.length;
    const originDices = [a, b, c];
    switch(diceLen) {
        
        case 1: {
            return mathPow(originDices, 3);
        }
        case 2: {
            return mathPow(originDices, 2);
        }
        case 3: {
            return mathPow(originDices);
        }
    }
}




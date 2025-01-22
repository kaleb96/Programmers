function solution(n, control) {
    let cal = n;
    [...control].forEach((word) => {
        if(word === 'w') cal += 1;
        
        if(word === 's') cal -= 1;
        
        if(word === 'd') cal += 10;
        
        if(word === 'a') cal -= 10;
    })
    return cal
}
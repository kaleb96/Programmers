const solution = (arr) => {
    
    let res1 = '';
    let res2 = '';
    for(let i of arr) {
        
        if(i % 2 === 1) { //홀수
            res1 += `${i}`;     
        }
        
        if(i % 2 === 0) { //짝수
            res2 += `${i}`;
        }
    }
    return Number(res1) + Number(res2);
}
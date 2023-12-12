const solution = (num, n) => {
    
    let result = num.reduce((acc, cur) => {
        
        if(acc <= n) {
            acc += cur;
        }
        return acc;
    })
    return result;
}
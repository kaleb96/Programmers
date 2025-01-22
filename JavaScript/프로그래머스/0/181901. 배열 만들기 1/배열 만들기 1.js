const solution = (n, k) => {
    
    let result = [];
    for(let i = 1; i * k <= n; i++) {
        
        result.push(i * k);
    }
    return result.sort((a, b) => a - b);
}
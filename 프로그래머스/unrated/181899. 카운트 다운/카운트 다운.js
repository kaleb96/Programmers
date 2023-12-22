const solution = (start, end) => {
    
    let result = [];
    for(let i = 0; start - i >= end; i++) {
        result.push(start - i);
    }
    return result;
}
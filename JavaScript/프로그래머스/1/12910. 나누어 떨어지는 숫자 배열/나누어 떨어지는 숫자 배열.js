const solution = (arr, divisor) => {
    const result = [];
    arr.forEach((element) => {
        if(element % divisor === 0) {
            result.push(element)
        }
    })
    
    if(result.length === 0) {
        result.push(-1)
    } else {
        result.sort((a, b) => a - b)
    }
    return result;
}
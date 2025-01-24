function solution(arr) {
    const result = [];
    
    arr.forEach((v) => {
        for(let i = 0; i < v; i++) {
            result.push(v);
        }
    })
    return result;
}
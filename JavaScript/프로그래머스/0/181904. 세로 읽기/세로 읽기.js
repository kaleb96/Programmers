function solution(my_string, m, c) {
    const str = [...my_string];
    let result = '';
    let temp = []
    str.forEach((v, idx)=> {
        temp.push(v);
        if((idx + 1) % m === 0) {
            result += temp[c - 1] 
            temp = []
        }
    })
    return result
}
function solution(a, b) {
    var answer = 0;
    let tmp1 = Number(`${a}${b}`);
    let tmp2 = Number(`${b}${a}`);
    
    if(tmp1 >= tmp2) {
        return tmp1;
    } else 
        return tmp2;
}

// function solution(a, b) {
//     return Math.max(Number(`${a}${b}`), Number(`${b}${a}`))
// }

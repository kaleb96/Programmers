function solution(a, b) {
    
    let answer = '';
    let check1 = Number(`${a}${b}`);
    let check2 = 2 * Number(a * b);
    answer = Math.max(check1, check2);
    return answer;
}
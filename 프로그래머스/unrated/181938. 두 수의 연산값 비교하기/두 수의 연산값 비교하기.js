function solution(a, b) {
    
    let answer = '';
   
    if((a >= 1 && a <= 10000) && (b >= 1 && b <= 10000)) {
        let check1 = Number(`${a}${b}`);
        let check2 = 2 * Number(a * b);
        answer = Math.max(check1, check2);
    }
    return answer;
}

function solution(n) {
    
    let result = [];
    let i = 0;
    result.push(n)
    while(n !== 1) {
        if(n % 2 === 0) {
            // n이 짝수
            n = n/2;
        } else {
            // n이 홀수
            n = 3 * n + 1
        }
        result.push(n);
        i++;
    }
    return result
}
function solution(n) {
    let answer = 0;
    for(let i = 1; i <= n; i += 2) {
        if(n % 2 === 1) { // 홀수의 경우
            answer += i;  
        } else { // 짝수의 경우
            answer += (i + 1) * (i + 1);
        }
    }
    return answer;
}
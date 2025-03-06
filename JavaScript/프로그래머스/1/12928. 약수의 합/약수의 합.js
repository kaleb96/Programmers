function solution(n) {
    // 나누었을때 나누어 떨어지면 약수
    let result = 0;;
    let i = 1;
    while(i <= n) {
        if(n % i === 0) {
            result += i;
        }
        i++;
    }
    return result;
}
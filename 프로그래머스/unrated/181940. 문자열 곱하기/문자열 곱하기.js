function solution(str, k) {
    let answer = '';
  
    if((1>= str.length <= 100) && (1>= k <= 100)) {
        // answer = str.repeat(k);
        for(let i = 0; i < k; i++) {
            answer += str;
        }
    }
    return answer;
}
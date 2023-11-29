function solution(start, end) {
    let answer = [];
    if((start >= 0 && start <= end) && (end <= 50)) { // 제한사항
        
        for(let i = start; i <= end; i++) {
            answer.push(i);
        }
    }
    return answer;
}

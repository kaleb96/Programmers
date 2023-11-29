function solution(start_num, end_num) {
    let answer = [];
    if((start_num >= 0 && start_num <= end_num) && (end_num <= 50)) { // 제한사항
        
        for(let i = 0; i <= (end_num - start_num); i++) {
            answer.push(start_num + i);
        }
    }
    return answer;
}

function solution(number, n, m) {
    if((number >= 10 && number<=100) && (n >= 2 && n <= 10) && (m >=2 && m <=10)) { // 제한사항
        if((number%n ===0) && (number%m ===0)) { // 공배수
            return 1;
        } else // 공배수가 아닌 경우
            return 0; 
    }
    return answer;
}
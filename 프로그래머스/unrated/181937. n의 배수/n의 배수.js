function solution(num, n) {
    var answer = 0;
    
    if((num>=2 && num <=100) && (n>=2 && n <= 9)) {
        if((num % n) === 0) { //배수
            return 1;
        } else {
            return 0;
        }
    }
}
// == 은 동등연산자로 값의 일치 여부에 따른 true/false 
// === 은 일치연산자로 값과 타입의 일치 여부에 따른 true/false

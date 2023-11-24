function solution(num, n) {
    var answer = 0;
    
    if((num>=2 && num <=100) && (n>=2 && n <= 9)) {
        if((num % n) == 0) { //배수
            return 1;
        } else {
            return 0;
        }
    }
}
function solution(myString) {
    var answer = '';
    if(myString.length >=1 && myString.length <= 100000) { // 제한사항
        answer = myString.toUpperCase();
    }
    return answer;
}

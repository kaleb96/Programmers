function solution(my_string, k) {
    var answer = '';
  
    if((1>= my_string.length <= 100) && (1>= k <= 100)) {
        answer = my_string.repeat(k);
    }
    return answer;
}
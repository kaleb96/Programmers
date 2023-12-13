function solution(my_string, n) {
    let answer = '';
    // let len = my_string.length;
    // for(let i = (len - n); i < len; i++) {
    //     answer += my_string[i];
    // } 
    answer = my_string.slice(- n);

    return answer;
}
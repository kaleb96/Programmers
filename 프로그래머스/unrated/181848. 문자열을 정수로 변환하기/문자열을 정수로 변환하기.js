function solution(n_str) {
    let answer = 0;
    if(n_str.length >= 1 && n_str.length <=5) { //제한사항
        // answer = Number(n_str);
        answer = parseInt(n_str);
    }
    return answer;
}
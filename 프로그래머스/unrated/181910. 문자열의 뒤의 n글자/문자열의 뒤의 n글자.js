function solution(my_string, n) {
    let answer = '';
    let len = my_string.length;
    
    if((len >= 1 && len <= 1000) && (n >=1 && n <= len)) { // 제한사항
       
        // for(let i = (len - n); i < len; i++) {
        //     answer += my_string[i];
        // } 
        
        answer = my_string.slice(- n);
        
    }

    return answer;
}
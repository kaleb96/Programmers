function solution(my_string, overwrite_string, s) {
// substring과 조건문을 활용하는 방법
// let answer = '';
// let startStr = '';
// let endStr = '';
//     startStr = my_string.substring(0, s);
    
//     if((my_string.length - overwrite_string.length) > 0) {
//         endStr = my_string.substring(overwrite_string.length + s, my_string.length);
//     }
    
//     answer = `${startStr}${overwrite_string}${endStr}`;
// return answer;   
    
//splice를 사용하는 방식
    let a = my_string.split(''); //배열화
    a.splice(s, overwrite_string.length, ...overwrite_string);
    return a.join('');

}
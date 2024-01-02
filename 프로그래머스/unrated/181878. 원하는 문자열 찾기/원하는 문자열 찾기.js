// function solution(myString, pat) {
//     var answer = 0;
//     return answer;
// }

const solution = (str, pat) => {
    
    str = str.toLowerCase();
    pat = pat.toLowerCase();
    
    if(str.includes(pat))
        return 1;
    else 
        return 0;

/*
    문자열이 연속된 부분 문자열인지 판단하기위함, 주어진 문자열이 알파벳 대소문자로 이루어져 구분하지 않고 있기 때문에
    소문자 또는 대문자로 각각의 문자열들을 통일하여 문자열이 포함되어있는지 비교
*/
}
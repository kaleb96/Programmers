// function solution(my_string, is_prefix) {
//     var answer = 0;
//     return answer;
// }

const solution = (str, prefix) => {
    
    let len = prefix.length;
    let result = str.substring(0, len);
    if(prefix == result)
        return 1;
    else 
        return 0;
}
/*
    접두사 prefix는 0번째부터 특정 인덱스까지의 문자열임으로,
    문자열에서 0번째에서 비교하는 prefix의 길이만큼의 문자열을 추출하여 비교
*/
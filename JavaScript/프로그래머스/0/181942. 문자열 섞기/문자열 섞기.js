function solution(str1, str2) {
    const len = str1.length;
    let result = '';
    for(let i = 0; i < len; i++) {
        result += `${str1[i]}${str2[i]}`
    }
    return result;
}
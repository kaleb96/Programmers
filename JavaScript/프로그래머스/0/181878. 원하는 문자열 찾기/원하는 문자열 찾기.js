function solution(myString, pat) {
    const strToLower = myString.toLowerCase();
    const patToLower = pat.toLowerCase();
    let result = 0;
    if(strToLower.includes(patToLower)) {
        result = 1;
    }
    return result;
}
function solution(myString, pat) {
    let result = 0;
    if(myString.toLowerCase().includes(pat.toLowerCase())) {
        result = 1;
    }
    return result;
}
function solution(strArr) {
    const result = [];
    strArr.forEach((str) => {
        if(!str.includes('ad')) {
            result.push(str);
        }
    })
    return result;
}
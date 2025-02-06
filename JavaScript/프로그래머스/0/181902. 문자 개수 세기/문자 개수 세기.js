function solution(my_string) {
    // Fill arr
    const result = Array(52).fill(0);
    const subStr = [...my_string];
    subStr.forEach((v) => {
        const getAscii = v.charCodeAt(0);
        if(getAscii >= 65 && getAscii <= 90) {
            // Upper ASCII 65 - 90
            result[getAscii - 65] += 1;
        } else {
            // Lower ASCII 97 - 122
            result[getAscii - 71] += 1;
        }
    })
    return result;
}
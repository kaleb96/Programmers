function solution(my_string, s, e) {
    const str = [...my_string];
    const subStr = my_string.substring(s, e + 1);
    console.log('subStr = ', subStr)
    const reversedStr = [...subStr].reverse();
    const splicedStr = str.splice(s, e - s + 1, ...reversedStr);
    return str.join('');
}
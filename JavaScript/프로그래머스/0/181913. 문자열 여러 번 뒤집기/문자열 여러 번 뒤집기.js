function solution(my_string, queries) {
    
    for(const [startIdx, endIdx] of queries) {
        const strToArr = [...my_string];
        const ori = strToArr.slice(startIdx, endIdx + 1);
        const sub = ori.reverse().join('');
        strToArr.splice(startIdx, endIdx - startIdx + 1, sub);
        my_string = strToArr.join('');
    }
    return my_string;
}
function solution(my_string, is_prefix) {
    let makeWord = '';
    let result = 0;
    [...my_string].forEach((word) => {
        makeWord += word;
        if(makeWord === is_prefix) {
            result = 1;
        }
    })
    return result;
}
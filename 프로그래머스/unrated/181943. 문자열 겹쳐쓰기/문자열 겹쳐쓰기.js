function solution(my_string, overwrite_string, s) {
    // my_string.length - s > overwrite_string.length 
    let answer = '';
    let startStr = '';
    let endStr = '';
    
    startStr = my_string.substring(0, s);
    if((my_string.length - overwrite_string.length) > 0) {
        endStr = my_string.substring(overwrite_string.length + s, my_string.length);
    }
    answer = `${startStr}${overwrite_string}${endStr}`;
    return answer;
}
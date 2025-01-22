function solution(my_string, n) {
    const sliced = [...my_string].splice(-n).join('');
    return sliced;
}

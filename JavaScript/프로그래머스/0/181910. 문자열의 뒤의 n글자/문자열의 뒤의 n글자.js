function solution(my_string, n) {
    const str = my_string
    const sliced = [...str].splice(-n).join('');
    return sliced;
}
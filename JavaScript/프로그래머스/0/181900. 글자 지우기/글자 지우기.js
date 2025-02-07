function solution(my_string, indices) {
    const str = [...my_string]
    const result = str.filter((v, idx) => !indices.includes(idx)).join('');
    return result;
}
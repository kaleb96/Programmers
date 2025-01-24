function solution(my_string, is_suffix) {
    const toArr = [...my_string];
    const prefix = toArr.map((v, idx) => {
        return toArr.slice(idx).join('');
    })
    return prefix.indexOf(is_suffix) !== -1 ? 1 : 0
}
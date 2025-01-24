function solution(my_string) {
    const str = [...my_string];
    let result = [];
    str.forEach((v, idx) => {
        const temp = str.slice(idx).join('');
        result.push(temp);
    })
    return result.sort()
}
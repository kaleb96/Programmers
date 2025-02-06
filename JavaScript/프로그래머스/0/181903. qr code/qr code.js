function solution(q, r, code) {
    const subCode = [...code];
    let result = '';
    subCode.forEach((v, idx) => {
        if(idx % q === r) {
            result += v;
        }
    })
    return result;
}
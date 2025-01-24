function solution(intStrs, k, s, l) {
    const result = intStrs.map((strs) => {
        const strsToArr = [...strs];
        const sliced = strsToArr.slice(s, l + s).join('');
        if(sliced > k) {
            return Number(sliced);
        } 
    }).filter((x) => x !== undefined)
    return result;
}
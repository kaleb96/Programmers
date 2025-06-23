const solution = (arr) => {
    let flag = -1;
    const result = []
    arr.forEach((v) => {
        if(flag !== v) {
            flag = v;
            result.push(v)
        }
    })
    return result;
}

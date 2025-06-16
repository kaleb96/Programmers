const solution = (a, b) => {
    const start = Math.min(a, b)
    const end = Math.max(a,b)
    let multi = 0;
    for(let i = start; i <=end; i++) {
        multi += i;
    }
    return multi
}
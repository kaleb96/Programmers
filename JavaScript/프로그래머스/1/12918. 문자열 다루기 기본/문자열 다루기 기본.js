const solution = (s) => {
    const len = s.length;
    const checker = []
    for(let i = 0; i < 10; i++) {
        checker.push(`${i}`)
    }
    let result = true;
    if(len === 4 || len === 6) {
        [...s].forEach((a) => {
            if(checker.indexOf(a) === -1) {
                result = false;
            }
        }) 
    } else {
        result = false;
    }
    return result;
}
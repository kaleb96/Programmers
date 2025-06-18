const solution = (s) => {

    const len = s.length;
    const half = Math.trunc(len / 2)
                        
    
    let str = ''
    if(len % 2 === 0) {
        str = `${s[half - 1]}${s[half]}`
    } else {
        str = `${s[half]}`
    }
    return str;
}

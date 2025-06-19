const solution = (a ,b) => {
    let naejuk = 0;
    for(let i = 0; i < a.length; i++) {
        const temp = a[i] * b[i];
        naejuk += temp
    }
    return naejuk
}
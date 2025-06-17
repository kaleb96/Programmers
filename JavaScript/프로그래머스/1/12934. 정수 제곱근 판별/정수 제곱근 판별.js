const solution = (n) => {
    let i = 1;
    while(Math.pow(i, 2) <= n) {
        const power = Math.pow(i, 2);
        if(power === n) {
            return Math.pow(i + 1, 2)
        }
        i++;
    }
    return -1
}
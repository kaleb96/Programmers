const collatzCal = (num) => {
    let checker = num;
    if(checker % 2 === 0) {
        // 짝수
        checker = checker / 2
    } else {
        // 홀수
        checker = (checker * 3) + 1
    }
    return checker;
}

const solution = (num) => {
    
    if(num === 1) {
        return 0;
    }
    
    let i = 1;
    let checker = num;
    while(i <= 500) {
        checker = collatzCal(checker)
        if(checker === 1) {
            return i
        }
        i++;
    }
    return -1;
}

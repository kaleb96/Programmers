const getMeasure = (target) => {
    const measure = []
    for(let i = 1; i <= target; i++) {
        if(target % i === 0) {
            measure.push(i)
        }
    }
    return measure
}

const solution = (left, right) => {
    let result = 0;
    for(let i = left; i <= right; i++) {
        const measure = getMeasure(i)
        const len = measure.length;
        if(len % 2 === 0) {
            result += i;
        } else {
            result -= i;
        }
    }
    return result;
}
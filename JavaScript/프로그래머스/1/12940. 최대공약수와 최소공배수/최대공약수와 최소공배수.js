const getGreatestCD = (a, b) => {
    const getA = []
    const getB = []
    for(let i = 1; i <= a; i++) {
        if(a % i === 0) {
            getA.push(i)
        }
    }
    for(let i = 1; i <=b; i++) {
        if(b % i === 0) {
            getB.push(i)
        }
    }
    console.log('getA = ', getA)
    console.log('getB = ', getB)
    const getCommon = getA.map((v) => {
        if(getB.indexOf(v) !== -1) {
            return v;
        }
        
    }).filter((v) => v !== undefined)
    
    console.log('getCommon = ', getCommon)
    return Math.max(...getCommon)
}
const getLeastCM = (a, b) => {
    i = 1;
    const getA = []
    const getB = []
    let common = -1
    while(i <= 1000000) {
        if(a < b) {
            const currentA = a * i;
            const currentB = b * i;
            getA.push(currentA)
            getB.push(currentB)
            if(getB.indexOf(currentA) !== -1) {
                common = currentA
                break;
            }
        } else {
           const currentA = a * i;
            const currentB = b * i;
            getA.push(currentA)
            getB.push(currentB)
            if(getA.indexOf(currentB) !== -1) {
                common = currentB
                break;
            }
        }
        i++;
    }
    return common;
}

const solution = (n, m) => {
    const greatestCommon = getGreatestCD(n, m)
    const leastMultiple = getLeastCM(n, m)

    return [greatestCommon, leastMultiple]
}
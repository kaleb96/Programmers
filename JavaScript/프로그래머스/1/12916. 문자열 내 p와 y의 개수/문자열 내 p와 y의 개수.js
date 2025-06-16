const solution = (s) => {
    const sToArr = s.split('')

    let pCounter = 0;
    let yCounter = 0;
    sToArr.forEach((arr) => {
        const toLower = arr.toLowerCase()
        if(toLower === 'p') {
            pCounter += 1;
        }
        if(toLower === 'y') {
            yCounter += 1;
        }
    })
    
    if(pCounter === yCounter) {
        return true;
    } else {
        return false;
    }

}
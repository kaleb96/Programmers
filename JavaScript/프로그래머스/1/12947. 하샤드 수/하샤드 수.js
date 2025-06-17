const solution = (n) => {
    const getNArr = `${n}`.split('').map((a) => parseInt(a))
    const getMultiple = getNArr.reduce((acc, cur) => acc + cur)
    if( n % getMultiple === 0) {
        return true
    }  else { 
        return false
    }
    
}
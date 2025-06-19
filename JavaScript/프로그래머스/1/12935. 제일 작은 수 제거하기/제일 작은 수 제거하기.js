const solution = (arr) => {
    const min = Math.min(...arr)
    const getIdx = arr.indexOf(min)
    arr.splice(getIdx, 1)
    
    if(arr.length === 0) {
        arr.push(-1)
    }
    return arr;
}
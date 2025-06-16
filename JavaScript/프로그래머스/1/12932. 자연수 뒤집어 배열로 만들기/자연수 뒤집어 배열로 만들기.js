const solution = (n) => {
    const nArr = `${n}`.split('')
    const result = nArr.map((arr) => {
        return parseInt(arr)
    })
    return result.reverse()
}
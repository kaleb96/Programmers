const solution = (n) => {
    const arr = `${n}`.split('').sort((a, b) => {
        const first = parseInt(a)
        const next = parseInt(b)
        return next - first
    })
    const result = parseInt(arr.join(''))
    return result
}
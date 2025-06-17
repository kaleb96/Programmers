const solution = (numbers) => {
    let checker = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    numbers.forEach((number) => {
        const getIdx = checker.indexOf(number)
        if(getIdx !== -1) {
            checker.splice(getIdx, 1)
        }
    })
    return checker.reduce((acc, cur) => acc + cur)
}
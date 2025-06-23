const solution = (arr1, arr2) => {
    const result = arr1.map((v, index) => {
        const innerArr1 = arr1[index]
        const innerArr2 = arr2[index]
        const multipleV = innerArr1.map((inner, idx) => {
            return innerArr1[idx] + innerArr2[idx]
        })
        return multipleV
    })
    return result
}
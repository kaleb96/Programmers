const solution = (n) => {
    
    const sortedN = [...n].sort((a, b) => {
        if(a > b) {
            return -1
        } else {
            return 1
        }
    }).join('')
    return sortedN
}
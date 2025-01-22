function solution(arr, k) {
    const result = arr.map((v) => {
        return ( k % 2 === 1 ) ? v * k : v + k 
    })
    return result;
}
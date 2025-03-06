function solution(arr) {
    const len = arr.length;
    let arrPlus = 0;
    arr.forEach((v) => arrPlus += v);
    
    return ( arrPlus / len )
}
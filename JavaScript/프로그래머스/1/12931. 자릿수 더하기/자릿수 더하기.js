function solution(n) {
    
    const numToStr = `${n}`;
    let result = 0;
    [...numToStr].forEach((num) => {
        result += Number(num)
    })
    return result;
}
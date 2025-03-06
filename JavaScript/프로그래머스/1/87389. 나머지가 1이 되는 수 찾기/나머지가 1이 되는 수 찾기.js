function solution(n) {
    const arr = [];
    let i = 0;
    while(i <= n) {
        if(n % i === 1) {
            arr.push(i);
        }
        i++;
    }
    console.log('arr = ', arr);
    return Math.min(...arr)
}
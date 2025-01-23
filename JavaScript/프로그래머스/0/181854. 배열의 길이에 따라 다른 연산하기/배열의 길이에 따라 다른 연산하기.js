function solution(arr, n) {
    const len = arr.length;
    let result = [];
    if(len % 2 === 1) {
        result = arr.map((v, idx) => {
            if(idx % 2 === 0) {
                return v + n;
            }
            return v;
        })
    } else {
        result = arr.map((v, idx) => {
            if(idx % 2 === 1) {
                return v + n
            }
            return v;
        })
    }
    return result;
}
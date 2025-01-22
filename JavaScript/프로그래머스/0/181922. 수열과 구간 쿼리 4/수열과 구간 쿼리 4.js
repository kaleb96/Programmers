function solution(arr, queries) {
    queries.forEach(([s, e, k]) => {
        let tempArr = arr;
        arr = arr.map((v, idx) => {
            if( idx >= s && idx <= e) {
                if( idx % k === 0) {
                    return v += 1;
                }
            }
            return v;
        })
    })
    return arr
}
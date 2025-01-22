function solution(arr, queries) {
    
    let result = [];
    queries.forEach(([s, e, k]) => {
        let tempArr = arr;
        // console.log('tempArr = ', tempArr)
        // console.log('sek = ', s, e, k);
        tempArr = tempArr.filter((v, idx) => {
            if(idx >= s && idx <= e) {
                if(v > k) {
                    return v;
                }
            }
        })
    const min = Math.min(...tempArr);
    if(min === Infinity) {
        result.push(-1)
    } else {
        result.push(min)
    }
        
    })
    return result
}
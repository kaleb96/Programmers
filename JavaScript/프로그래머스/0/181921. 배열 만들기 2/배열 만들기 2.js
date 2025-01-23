function solution(l, r) {
    let arrList = [];
    for(let i = l; i <= r; i++) {
        if(i % 5 === 0) {
                arrList.push(i);
        }
    }
    const result = arrList.map((v) => {
        const numList = [...`${v}`];
        if(numList.every((cur) => cur === '0' || cur === '5')) {
            console.log('v = ', v)
           return v;
        } 
    }).filter((v) => v !== undefined)
   
    if(result.length === 0) {
        result.push(-1)
    }
    return result;
}
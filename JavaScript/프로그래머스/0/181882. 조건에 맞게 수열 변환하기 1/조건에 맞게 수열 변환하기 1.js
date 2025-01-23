function solution(arr) {
    const result = arr.map((v) => {
        if(v >= 50 && v % 2 === 0) {
            return v / 2;
        } 
        
        if( v < 50 && v % 2 === 1) {
            return 2 * v;
        }
        else {
            return v;  
        }
    })
    return result;
}
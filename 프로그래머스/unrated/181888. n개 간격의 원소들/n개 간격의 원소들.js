const solution = (arr, n) => {
    
    let result = [];
    for(let i = 0; i < arr.length; i++) {     
        
        if(i*n < arr.length) {
            result.push(arr[i * n]); // 첫 번째 원소부터 n개이 간격으로 
        }
    }
    return result;
}
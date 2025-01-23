function solution(arr) {
   
    let stk = [];
    
    let i = 0;
    while(i < arr.length) {
        
        if(stk.length === 0) {
            stk.push(arr[i]);
            i++;
        }
        
        if(stk.at(-1) < arr[i]) {
            stk.push(arr[i]);
            i++;
        }
        
        if(stk.at(-1) >= arr[i]) {
            stk.pop();
        } 
    }
    return stk;
}
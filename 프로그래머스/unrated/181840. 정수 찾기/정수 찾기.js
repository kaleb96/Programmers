function solution(arr, n) {
    
    if((arr.length >= 3 && arr.length <= 100) && (n >= 1 && n <= 100)) { // 제한사항
        let flag = 0;
        for(let e of arr) {
            
            if(e === n) 
                flag += 1;
            else
                flag += 0;
        }
        
        if(flag > 0) 
            return 1;
        else
            return 0;
    }
}
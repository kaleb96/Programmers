function solution(arr, k) {
    let answer = [];

    // if(k>=1 && k<=100) { // 제한사항2
                  
        // if((arr.length>=1 && arr.length <=1000000) && (Math.min(...arr) >= 1 && Math.max(...arr) <= 100)) { // 제한사항1
                              
            for(let i=0; i < arr.length; i++) {
                
                if(k%2 === 1) 
                    answer[i] = arr[i] * k;
                else 
                    answer[i] = arr[i] + k;
            // }     
        // }
    }
    return answer;
}
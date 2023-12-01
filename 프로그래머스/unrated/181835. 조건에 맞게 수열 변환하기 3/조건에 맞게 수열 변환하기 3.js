function solution(arr, k) {
    let answer = [];
    // let maxNum = Math.max(...arr);
    // let minNum = Math.min(...arr);
    
    if(k>=1 && k<=100) { // 제한사항2
                  
        if(arr.length>=1 && arr.length <=1000000) { // 제한사항1
           
            // if(minNum >= 1 && maxNum <= 100) { // 제한사항 1-1
                
                for(num of arr) {
                
                    if(k%2 === 1) 
                        answer.push(num * k);
                    else 
                        answer.push(num + k);
                }   
            // }
  
        }
    }
    return answer;
}

function solution(num_list, n) {
    let answer = [];
    let len = num_list.length;
    let min = Math.min(...num_list);
    let max = Math.max(...num_list);
    
    if((len >= 2 && len <= 30) && (min >= 1 && max <= 9)) { // 제한사항
        
        if(n>=1 && n<= len) { // 제한사항
            
            for(let i = 1; i<=n; i++){
                answer.push(num_list[i - 1]);
            }
             // answer = num_list.slice(0, n);
        }

    }
    
  
    return answer;
}

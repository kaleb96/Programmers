\function solution(num_list) {
    let answer = 0;
    let len = num_list.length;
    let min = Math.min(...num_list); // 원소의 최소값
    let max = Math.max(...num_list); // 원소의 최대 값
    
    if((len >= 2 && len <= 20) && (min >=1 && max <=9)) { // 제한사항
        
        if(len >= 11) { // 모든 원소들의 합
            
            
            for(let tmp of num_list) {
                answer += tmp;  
            }
        }
        
        if(len <= 10) { // 모든 원소들의 곱
            
            answer = 1;
            for(let tmp of num_list) {
                answer *= tmp;
            }
        }
    }
    return answer;
}

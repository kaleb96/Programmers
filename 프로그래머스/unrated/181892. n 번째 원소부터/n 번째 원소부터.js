function solution(num_list, n) {
    let answer = [];
    let len = num_list.length;
    let min = Math.min(...num_list);
    let max = Math.max(...num_list);
    
    if((len >=2 && len <=30) && (min >=1 && max <=9) && (n >=1 && n <= len)) { // 제한사항
        answer = num_list.slice(n-1, num_list.length);
          return answer;
    }
  
}
function solution(num_list) {
    let answer = 0;
    let len = num_list.length;
    let max = Math.max(...num_list);
    let min = Math.min(...num_list);
    
    if((len >= 5 && len <= 100) && (min >= -10 && max <= 100)) { // 제한사항
    
        for(let i = 0; i < len; i++) {

            answer = num_list[i];

            if(answer < 0) //음수가 있을경우 인덱스리턴
            return i;
        }
        return -1; // 없을 경우 -1리턴
    }
}
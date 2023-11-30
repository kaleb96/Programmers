function solution(num_list) {
 
    let num = num_list.length;
    let endNum = num_list[num - 1]; // 마지막 원소
    let endBeforeNum = num_list[num - 2]; // 그 전 원소
    
    if(num>=2 && num <= 10) { // 제한사항
        
        if(endNum > endBeforeNum) { //마지막원소가 그 전 원소보다 클 경우
            num_list.splice(num, 1, endNum-endBeforeNum);
            return num_list;
        } else { // 마지막 원소가 그 전 원소보다 작을 경우
            num_list.splice(num, 1, (endNum*2));
            return num_list;
        }
    }

}

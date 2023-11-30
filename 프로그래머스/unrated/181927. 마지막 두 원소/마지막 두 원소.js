function solution(num_list) {
 
    let num = num_list.length;
    let endNum = num_list[num - 1];
    let endBeforeNum = num_list[num - 2];
    
    if(endNum > endBeforeNum) {
        num_list.splice(num, 1, endNum-endBeforeNum);
        return num_list;
    } else {
        num_list.splice(num, 1, (endNum*2));
        return num_list;
    }
}
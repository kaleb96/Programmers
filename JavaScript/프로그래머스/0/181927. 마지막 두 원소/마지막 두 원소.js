function solution(num_list) {
    const len = num_list.length
    const lastNum = num_list[len - 1];
    const lastBeforeNum = num_list[len - 2];
    const newNum = lastNum > lastBeforeNum 
        ? lastNum - lastBeforeNum 
        : 2 * lastNum;
    num_list.push(newNum);
    return num_list
}
function solution(num_list) {
    let index = -1;
    let i = 0;
    while(i < num_list.length) {
        if(num_list[i] < 0) {
            index = i;
            break;
        }
        i++;
    }
    return index;
}
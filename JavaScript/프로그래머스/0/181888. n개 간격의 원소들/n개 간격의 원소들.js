function solution(num_list, n) {
    let i = 0;
    const result = [];
    while(i < num_list.length) {
        result.push(num_list[i]);
        i += n;
    }
    return result;
}
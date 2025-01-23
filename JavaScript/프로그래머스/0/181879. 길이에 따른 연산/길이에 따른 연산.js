function solution(num_list) {
    const len = num_list.length;
    const result = num_list.reduce((acc, cur) => {
        if(len >= 11) {
            return acc + cur;
        } else {
            return acc * cur;
        }
    })
    return result;
}
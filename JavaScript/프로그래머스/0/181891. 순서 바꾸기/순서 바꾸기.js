function solution(num_list, n) {
    const nAfter = num_list.splice(n, num_list.length - n + 1);
    return [...nAfter,...num_list]
}
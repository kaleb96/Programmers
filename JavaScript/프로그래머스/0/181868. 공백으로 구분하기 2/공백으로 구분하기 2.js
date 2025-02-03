function solution(my_string) {
    const filteredStr = my_string.split(' ').filter((x) => x !== ('') );
    return filteredStr;
}
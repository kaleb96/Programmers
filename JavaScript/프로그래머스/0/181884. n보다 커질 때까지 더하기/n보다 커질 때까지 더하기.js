function solution(numbers, n) {
    let i = 0;
    let result = 0;
    while( i < numbers.length) {
        if(result > n) {
            break;
        }
        result += numbers[i]
        i++;
    }
    return result;
}
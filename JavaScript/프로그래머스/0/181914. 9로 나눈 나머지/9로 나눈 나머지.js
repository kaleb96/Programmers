function solution(number) {
    const sum = [...`${number}`].reduce((acc, cur) => Number(acc) + Number(cur));
    return sum % 9
}
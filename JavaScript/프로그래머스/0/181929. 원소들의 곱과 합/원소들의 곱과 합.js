function solution(num_list) {
    let multiply = 1;
    let add = 0;
    num_list.forEach((v) => {
        multiply *= v;
        add += v;
    })
    return multiply < Math.pow(add, 2) ? 1 : 0
}
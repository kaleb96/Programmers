function solution(a, b) {
    const addStr = `${a}${b}`;
    const multiplyStr = 2 * a * b;
    return addStr >= multiplyStr ? Number(addStr) : multiplyStr;
}
function solution(myString) {
    const result = [...myString].map((v) => v.toUpperCase()).join('');
    return result;
}
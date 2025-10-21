function solution(s) {
    // 새로운 맵 생성
    const temp = new Map();
    const result = [...s].map((ch, i) => {
        // 문자로 index 찾기
        const last = temp.get(ch);
        // 문자와 index 저장
        temp.set(ch, i);
        // 결과값 result;
        return last === undefined ? -1 : i - last;
    })
    return result;
}
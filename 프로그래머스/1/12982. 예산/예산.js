function solution(d, budget) {
    d.sort((a, b) => (a - b )); // 오름차순 정렬
    let count = 0;

    for(let i = 0; i < d.length; i++) {
        if(budget >= d[i]) {
            budget -= d[i];
            count ++;
        } else {
            break;
        }
    }
    return count;
}
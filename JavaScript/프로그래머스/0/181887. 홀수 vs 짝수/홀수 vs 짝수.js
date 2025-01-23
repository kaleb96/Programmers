function solution(num_list) {
    let even = 0;
    let odd = 0;
    num_list.forEach((v, idx) => {
        if(idx % 2 === 0) {
            // 홀수 번째
            odd += v;
        } else {
            even += v;
        }
    })
    return even >= odd ? even : odd;
}
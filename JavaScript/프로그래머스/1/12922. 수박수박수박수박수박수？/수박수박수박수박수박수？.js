function solution(n) {
    let waterMelon = ''
    for(let i = 0; i < n; i++) {
        if(i % 2 === 0) {
            waterMelon += '수'
        } else {
            waterMelon += '박'
        }
    }
    return waterMelon
}
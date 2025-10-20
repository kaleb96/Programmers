function solution(sizes) {
    // Greedy 문제
    let maxW = 0;
    let maxH = 0;
    
    for(let [w, h] of sizes) {
        if( w < h) [w, h] = [h, w]; // 구조분배 할당

        maxW = Math.max(maxW, w); // 가장 긴 width
        maxH = Math.max(maxH, h); // 가장 긴 height
    }
    return maxW * maxH
}
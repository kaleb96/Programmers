function solution(a, b) {
    let answer = 0;
    let tmp1 = Number(`${a}${b}`);
    let tmp2 = Number(`${b}${a}`);
    
    if((a>= 1 && a<= 10000) && (b>=1 && b<= 10000)) { // 제한사항
        if(tmp1 >= tmp2) 
            answer = tmp1;
        else 
            answer = tmp2;
    }
    return answer;
}

// function solution(a, b) {   
//     let answer = 0;
//     if((a>= 1 && a<= 10000) && (b>=1 && b<= 10000)) { // 제한사항
//         answer = Math.max(Number(`${a}${b}`), Number(`${b}${a}`))
//     }
//     return answer;
// }

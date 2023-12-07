// function solution(num_list) {
//     let answer = 0;
//     let multiply = 1;
//     let add = 0;
    
//     for(let a of num_list) { //모든 원소들의 곱
//         multiply *= a;
//         add += a; // 모든 원소들의 합
//     }
    
//     // if(mutiply < Math.pow(add, 2))
//     if(multiply < (add*add))
//         return 1;
//     else 
//         return 0;
// }

const solution = (str) => {
    
    //제한사항을 위한 변수
    let len = str.length;
    let min = Math.min(...str);
    let max = Math.max(...str);
    
    if((len >=2 && len <= 10) && (min >= 1 && max <= 9)) { // 제한사항
        let x = str.reduce((a, b) => a *= b); // 모든 원소들의 곱
        let pow = Math.pow(str.reduce((a,b)=> a += b), 2) // 모든 원소들의 합의 제곱

        if(x < pow)
            return 1;
        else
            return 0;
    }
}

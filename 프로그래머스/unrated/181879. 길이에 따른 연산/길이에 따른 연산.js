// function solution(num_list) {
//     let answer = 0;
//     let len = num_list.length;
//     let min = Math.min(...num_list); // 원소의 최소값
//     let max = Math.max(...num_list); // 원소의 최대 값
    
//     if((len >= 2 && len <= 20) && (min >=1 && max <=9)) { // 제한사항
        
//         if(len >= 11) { // 모든 원소들의 합
            
            
//             for(let tmp of num_list) {
//                 answer += tmp;  
//             }
//         }
        
//         if(len <= 10) { // 모든 원소들의 곱
            
//             answer = 1;
//             for(let tmp of num_list) {
//                 answer *= tmp;
//             }
//         }
//     }
//     return answer;
// 


// const solution = (n) => {
       
//     if(n.length > 10) { // num_list의 길이가 11이상인 경우, 모든 원소들의 합
        
//         let sum = n.reduce((a, v) => a + v)
//         return sum;
    
//     } else { // 10 이하인 경우, 모든 원소들의 곱
    
//         let sum = n.reduce((a, v) => a * v)
//         return sum;
//     }
// }

function solution(n) {
    
    let answer = 0;
   
    if(n.length > 10) { // num_list의 길이가 11이상인 경우, 모든 원소들의 합
        n.map((a => answer +=a))
        
    } else { //  num_list의 길이가 10 이하인 경우, 모든 원소들의 곱
        answer = 1;
        n.map((a => answer *=a))
    }
    
    return answer
}
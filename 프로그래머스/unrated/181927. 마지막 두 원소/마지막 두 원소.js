// function solution(num_list) {
//     var answer = [];
//     return answer;
// }

const solution = (arr) => {
    
    let len = arr.length;
    let end = arr[len - 1]; // 마지막 원소
    let endBefore = arr[len - 2]; // 그 전 원소
    
    if(len>=2 && len <= 10) { // 제한사항
        
        if(end > endBefore) { //마지막원소가 그 전 원소보다 클 경우
            
            arr.splice(len, 1, end-endBefore);
            return arr;
        
        } else { // 마지막 원소가 그 전 원소보다 작을 경우
            arr.splice(len, 1, (end*2));
            return arr;
        }
    }
}
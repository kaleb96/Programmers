function solution(my_string, index_list) {
    let answer = '';
    let min = Math.min(...index_list);
    let max = Math.max(...index_list);
    let lenStr = my_string.length;
    let letIdx = index_list.length;
    
    if((lenStr >= 1 && lenStr<= 1000) && (letIdx >= 1 && letIdx <= 1000) && (min >= 0 && max <= lenStr)) { // 제한사항
        
//         for(let i = 0; i<index_list.length; i++) {

//             let idx = index_list[i];
//             answer += my_string[idx];
//         }
//         return answer;
        return index_list.map(i => my_string[i]).join('');
    }
}

/*
자바스크립트에서 map은 배열을 순회하면서 각 요소에 대해 특정한 동작을 수행하고,
그 결과를 새로운 배열로 반환하는 고차함수.

index_list를 순회하면서 index_list[i]의 값들을 join으로 문자열로 결합하는 방식
*/

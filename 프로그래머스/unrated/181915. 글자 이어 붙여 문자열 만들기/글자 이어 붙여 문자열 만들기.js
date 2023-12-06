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
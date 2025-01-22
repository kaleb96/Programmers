function solution(my_string, index_list) {
    
    let result = '';
    index_list.forEach((v) => {
        result += [...my_string][v];
    })
    return result;
}
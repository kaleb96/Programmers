const solution = (num_list) => {
    let len = num_list.length;
    let min = Math.min(...num_list);
    let max = Math.max(...num_list);
    
    if((len>=6 && len<= 30) && (min>=1 && max<=100)) {
    
    let result = [...num_list].sort((a, b) => { // JavaScript에서 배열의 오름차순 정렬
        
        return a-b;
    })
    
    return result.splice(0, 5) // 최소값 5개를 담은 리스트를 리턴
    }
}
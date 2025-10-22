function solution(numbers) {
    const set = new Set();
    numbers.forEach((num, idx) => {
        for(let i = 0; i < numbers.length; i++) {
            if(i === idx) {
                continue;
            }
            const plus = num + numbers[i];
            set.add(plus);
        }    
    })
    return Array.from(set).sort((a, b) => a -b); // Array로 변경한 후 오름차순 정렬
}
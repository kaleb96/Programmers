const solution = (start, end) => {
    
    // Array.from
    // return Array.from({length : end-start+1}, () => {return start++});

    /*
    {length: end - start + 1}: 첫 번째 인자 생성될 배열의 길이를 지정
    () => {return start++} : 두 번째 인자로, 매핑 함수(callback)를 정의 이 함수는 배열의 각 요소에 대해 호출되며,
    start++를 반환. start는 빈 객체 {}에서 Array.from() 호출로 생성되는 배열의 각 요소의 값을 의미합니다.
    */

    // Array.fill을 활용한 문제
    /*
    end-start+1 : 범위만큼의 배열의 크기를 할당. 
    Array.fill(value) : 배열에 value값을 채움. 
    map을 통해서 start에 idx만큼 증가 시켜 범위내의 값을 구함
    */
    if(start >=0 && start <= end && end <= 50) {
        return Array(end-start+1).fill(start).map((c, idx) => idx + start);
    }
}
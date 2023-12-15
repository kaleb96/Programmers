// const solution = (arr) => {
//     let answer = 0;
    
//     for(let i = 0; i < arr.length; i++) {

//         if(arr[i] < 0) //음수가 있을경우 인덱스리턴
//         return i;
//     }
//     return -1; // 없을 경우 -1리턴
// }

// const solution = (arr) => {

    /*
        findIndex 메서드는 주어진 함수의 조건을 만족하는
        배열 요소의 인덱스를 찾는데, 조건에 만족하는 요소가 없다면
        -1을 반환 합니다.
    */
//     const idx = arr.findIndex(x => x < 0);
//     return idx;
// }

const solution = (arr) => {
    
    /*
        filter 메서드는
        배열에서 주어진 함수의 조건을 만족하는 모든 요소를 
        포함하는 새로운 배열을 생성합니다.
    */
    let newArr = arr.filter((c) => { 
        
        if(c < 0) {
            return c
        }
    })
      
    return arr.indexOf(newArr[0]); 
    /*
    filter으로 찾은 값을 배열로 리턴하기 때문에 배열의 첫번째값을 리턴, 
    indexOf를 통해 값이 없을 경우 -1 을 리턴
    */
}


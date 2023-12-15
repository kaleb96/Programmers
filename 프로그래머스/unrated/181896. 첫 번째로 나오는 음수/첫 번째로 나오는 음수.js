// const solution = (arr) => {
//     let answer = 0;
    
//     for(let i = 0; i < arr.length; i++) {

//         if(arr[i] < 0) //음수가 있을경우 인덱스리턴
//         return i;
//     }
//     return -1; // 없을 경우 -1리턴
// }

const solution = (arr) => {
    
    const idx = arr.findIndex(x => x < 0);
    
    return idx;
}


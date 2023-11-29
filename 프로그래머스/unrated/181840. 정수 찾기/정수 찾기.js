function solution(arr, n) {
    
    if((arr.length >= 3 && arr.length <= 100) && (n >= 1 && n <= 100)) { // 제한사항
//         let flag = 0;
//         for(let e of arr) {
            
//             if(e === n) 
//                 flag += 1;
//             else
//                 flag += 0;
//         }
        
//         if(flag > 0) 
//             return 1;
//         else
//             return 0;
        
/* 
indexOf : 
indexOf는 배열의 특정요소의 첫번째 인덱스를 반환하는데, 
배열에 해당 요소가 존재하지 않을 경우,
-1을 반환함  
*/ 
        // if(arr.indexOf(n) != -1) 
        //     return 1;
        // else
        //     return 0;
/*
includes :
배열에 특정 값이 있는 여부에 따라 불리언 타입을 반환!

*/
        if(arr.includes(n))
            return 1;
        else 
            return 0;
    }
}


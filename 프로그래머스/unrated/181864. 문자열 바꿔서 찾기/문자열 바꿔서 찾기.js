const solution = (str, pat) => {
    let strLen = str.length;
    let patLen = pat.length;
    
    if((strLen>=1 && strLen <= 100) && (patLen>=1 && patLen<=10)) {
    
//         for(let i of str) { // myString  A->B, B->A 변환

//           if(i == 'A') {
//               newStr += 'B'
//           } else {
//               newStr += 'A'
//           }
//         }  
    
// if(newStr.indexOf(pat) == -1) { // 변환된 myString에 pat이 포함되는지 판단
//     return 0;
// } else {
//     return 1;
// }

        let newStr = [...str].reduce((acc, cur) => {
            if (cur === 'A') 
                acc += 'B';
            else 
                acc += 'A';
            return acc;
        }, '');
        
        if(newStr.includes(pat)) // 변환된 myString에 pat이 포함되는지 판단
            return 1;
        else 
            return 0;
    }
} 
/*
indexOf나 includes는 문자열에 직접 적용하고 배열메서드가 아니기 때문에 
문자열에 대해 [...str] 처럼 표현하지 않아도 되는데

reduce의 경우에는 배열을 생성하여 새로운 배열 값을 반환하기 때문에 문자열에 reduce를 직접사용하려면 [...str]
과 같이 사용해야함!
*/
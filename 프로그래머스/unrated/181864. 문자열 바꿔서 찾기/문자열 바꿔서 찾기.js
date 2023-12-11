const solution = (str, pat) => {
    let newStr = '';
    let strLen = str.length;
    let patLen = pat.length;
    
    if((strLen>=1 && strLen <= 100) && (patLen>=1 && patLen<=10)) {
    
        for(let i of str) { // myString  A->B, B->A 변환

          if(i == 'A') {
              newStr += 'B'
          } else {
              newStr += 'A'
          }
        }  
    
        if(newStr.indexOf(pat) == -1) { // 변환된 myString에 pat이 포함되는지 판단
            return 0;
        } else {
            return 1;
        }
    }
} 
const solution = (str, target) => {

    // includes 를 이용한 방식
    let result = str.includes(target);
    
    if(result)
        return 1;
    else 
        return 0;
    
    /* 
    RegExp는 JavaScript에서 정규식 표현을 나타내는 객체,
    test 메서드를 통해서 RegExp 객체의 문자열을 정규식패턴과 일치하는지 판단하여 
    일치 여부에 따라 true/false값을 리턴
    */
//     let result = new RegExp(`${target}`).test(str);
    
//     if(result)
//         return 1;
//     else 
//         return 0
    

}
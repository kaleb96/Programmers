function solution(a, b, flag) {
    var answer = 0;
    
    if((a >= -1000 && a<= 1000) && (b>= -1000 && b<=1000)) { //제한사항
        
        if(flag) 
            return a+b;
        else
            return a-b;
    }
}
const solution = (arr) => {
    
    let result = [...arr].map((c) => {
        
        if(c>=50 && c%2 === 0) { // 50보다 크거나 같은 짝수
            return c /= 2;
        } 
        
        if(c<50 && c%2 === 1) { // 50보다 작은 홀수
            return c *= 2;
        }
        return c;
    }) 
    return result;
}
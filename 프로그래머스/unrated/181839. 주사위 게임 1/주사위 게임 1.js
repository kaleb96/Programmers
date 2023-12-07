const solution = (a, b) => {
    
    if((a>=1 && a<=6) && (b>=1 && b<=6)) { // 제한사항
        
        
        if((a + b) % 2 === 1) { // 정수 a, b 중 하나만 홀수
            
            return 2 * (a + b);
        } else { // 두 정수 모두 홀수, 짝수 인 경우
            
            if(a % 2 === 1) {// 모두 홀수 인 경우 
                
                return (a * a) + (b * b);
            } else {
                
                return Math.abs(a - b);
            }
        }
    }
}
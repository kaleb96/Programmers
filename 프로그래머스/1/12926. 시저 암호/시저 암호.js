function solution(s, n) {
    
    const result = [...s].map((char) => {
        if(char === ' ') return char;
        
        const base = char === char.toUpperCase() ? 65 : 97 // 대문자 / 소문자 기준 체크
        return String.fromCharCode(((char.charCodeAt(0) - base + n) % 26) + base); // 계산

    }).join('')
    
    return result;
}
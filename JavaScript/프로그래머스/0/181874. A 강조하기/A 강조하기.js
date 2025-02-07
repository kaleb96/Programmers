function solution(myString) {
    const result = [...myString].map((alpha) => {
        if(alpha === 'a' || alpha === 'A') {
            alpha = alpha.toUpperCase();
        } else {
            alpha = alpha.toLowerCase();
        }
        return alpha;
    }).join('')
    return result
}
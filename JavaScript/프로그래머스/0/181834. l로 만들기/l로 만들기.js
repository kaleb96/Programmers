function solution(myString) {
 // ASCII 97 - 122 l = 108
    const alpha = [...myString];
    const result = alpha.map((al) => {
        if(al.charCodeAt(0) <= 108) {
            al = 'l';
        }
        return al;
    }).join('');
    return result;
}


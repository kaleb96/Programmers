function solution(myString, pat) {
    const convertStr = [...myString].map((v) => {
        if(v === 'A') {
            return 'B';
        } else {
            return 'A';
        }
    }).join('');
    
    return convertStr.includes(pat) ? 1 : 0;
}
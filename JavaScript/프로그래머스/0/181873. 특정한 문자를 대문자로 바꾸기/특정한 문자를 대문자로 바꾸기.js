function solution(my_string, alp) {
    return [...my_string].map((v) => {
        if(v === alp) {
            return v.toUpperCase();
        }
        return v;
    }).join('')
}
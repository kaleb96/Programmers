
function solution(a, d, included) {
    
    let result = 0;
    included.forEach((value, index) => {
        if(value) {
            result += (a + (index * d));
        }
        return result;
    })
    return result;
}

const solution = (arr, n) => {
    
    let len = arr.length;
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    
    if((len >= 1 && len <= 1000) && (n >= 1 && n <= 1000) && (min>=1 && max<=1000)) { // 제한사항
        if(len%2 === 1) { // arr의 길이가 홀수

            let result =  arr.map((c, idx) => {

                if(idx % 2 == 0)
                    return c + n;
                else
                    return c;

            })
            return result;

        } else { // arr의 길이가 짝수

            let result = arr.map((c, idx) => {

                if(idx % 2 === 1)
                    return c + n;
                else
                    return c;
            })
            return result;
        }
    }
}
function solution(s) {

    let counter = 0;
    s = [...s].map((str) => {
        if(str !== ' ') {
            str = counter % 2 === 0 ? str.toUpperCase() : str.toLowerCase();
            counter++;
        }  else {
            counter = 0;
        }
        return str;
    }).join('')
    
    return s;
}
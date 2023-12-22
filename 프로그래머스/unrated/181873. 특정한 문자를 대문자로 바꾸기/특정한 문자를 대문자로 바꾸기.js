const solution = (str, alp) => {
 
    let result = '';
    for(let i of str) {
        
        if(i === alp) 
            result += i.toUpperCase();
        else 
            result += i;
    }
    return result;
}
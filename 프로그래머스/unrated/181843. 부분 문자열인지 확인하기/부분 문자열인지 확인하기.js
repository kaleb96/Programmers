const solution = (str, target) => {

    let result = str.includes(target);
    
    if(result)
        return 1;
    else 
        return 0;
}
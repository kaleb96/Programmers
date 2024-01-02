const solution = (str1, str2) => {
    
    /* indexOf 를 활용하는 방법 */
    // if(str2.indexOf(str1) != -1)
    //     return 1;
    // else
    //     return 0;
    
    /* include를 활용하는 방법*/
    if(str2.includes(str1))
        return 1;
    else 
        return 0;
}
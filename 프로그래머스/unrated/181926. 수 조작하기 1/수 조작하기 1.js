const solution = (n, arr) => {
    
    for(let i of arr) {
        
        if(i === 'w')
            n += 1;
        if(i ==='s')
            n -= 1;
        if(i === 'd')
            n += 10;
        if(i === 'a')
            n -= 10;
    }
    return n;
//     [...arr].map((c) => {
        
//         if(c === 'w')
//             n += 1;
//         if(c ==='s')
//             n -= 1;
//         if(c === 'd')
//             n += 10;
//         if(c === 'a')
//             n -= 10;
//     })
//     return n;
    
}
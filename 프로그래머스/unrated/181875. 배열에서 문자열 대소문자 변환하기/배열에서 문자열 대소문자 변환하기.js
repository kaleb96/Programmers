const solution = (arr) => {
    
    let result = [...arr].map((c, idx) => {
        
        if(idx % 2 === 1)
            return c.toUpperCase();
        else
            return c.toLowerCase();
    })
    
    return result;
        
//         let answer = '';
//         let result = [];
//         for(let i = 0; i < arr.length; i++) {
           
            
//             if(i % 2 === 1)
//                 answer = arr[i].toUpperCase();
//             else 
//                 answer = arr[i].toLowerCase();
            
//             result.push(answer);
//         }
//         return result;
    
}
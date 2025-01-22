function calculateKey (num) {
    switch(num) {
        case 1: {
            return 'w';
        }
        case -1: {
            return 's';
        }
        case 10:{
            return 'd'
        }
        default: {
            return 'a';
        }
    }
}

function solution(numLog) {
    const firstNum = numLog[0];
    let insertKey = '';
    numLog.forEach((num, idx) => {
        switch(idx) {
            case 0: {
                break;
            }
            case 1: {
                insertKey += calculateKey(num - firstNum);
                break;
            }
            default: {
                insertKey += calculateKey(num - numLog[idx - 1])
                break;
            }
        }
    })
    return insertKey;
}

// function solution(numLog) {
//     const convert = {
//         '1': 'w', '-1': 's', '10': 'd', '-10': 'a'
//     };

//     return numLog.slice(1).map((v, i) => {
//         return convert[v - numLog[i]]
//     }).join('')
// }
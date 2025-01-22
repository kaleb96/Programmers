function calculateKey (num) {
    if( num === 1 ) {
        return 'w';
    } 
    if( num === -1 ) {
        return 's'
    } 
    if( num === 10 ) {
        return 'd'
    }
    if( num === -10 ) {
        return 'a'
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
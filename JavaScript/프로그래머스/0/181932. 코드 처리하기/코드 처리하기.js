function solution(code) {
    let mode = 0;
    let ret = '';
    [...code].forEach((s, idx) => {
        // mode가 0
        if(!mode) {
            if(s !== '1') {
                ret += idx%2 === 0 ? s : '';
            } else {
                mode = 1;
            }
        } else {
        // mode가 1
            if(s !== '1') {
                ret += idx%2 === 1 ? s : '';
            } else {
                mode = 0;
            }
        }
    })
    if(!ret) {
        return 'EMPTY';
    }
    return ret;
}
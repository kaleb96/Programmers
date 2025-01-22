function solution(ineq, eq, n, m) {
    const operation = `${ineq}${eq}`;
    let result = false;
    switch(operation) {
        case '>=': {
            result = n >= m;
            break;
        }
        case '<=': {
            result = n <=m;
            break;
        }
        case '>!': {
            result = n > m;
            break;
        }
        case '<!': {
            result = n < m;
            break;
        }
        default: {
            break;;
        }
    }
    return Number(result)
}


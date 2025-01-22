function checkOdd(a, b) {
    if(a % 2 === 1 && b % 2 === 1) {
        // a, b 모두 홀수
        return 'odd';
    } else if(a % 2 === 1 || b % 2 === 1) {
        // a 또는 b가 홀수
        return '';
    } else {
        // 모두 짝수
        return 'even';
    }
}

function solution(a, b) {
    const checkNum = checkOdd(a, b);
    if(checkNum === 'odd') {
        return Math.pow(a, 2) + Math.pow(b, 2);
    } else if(checkNum === 'even') {
        const minus = a - b;
        return minus >=0 ? minus : -minus
    } else {
        return 2 * ( a + b);
    }
}
function booleanFinder (a, b) {
    return a === true || b === true ? true : false;
}

function solution(x1, x2, x3, x4) {   
    const first = booleanFinder(x1, x2);
    const second = booleanFinder(x3, x4);

    return first === second ? first : false;
}


const solution = (str) => {

    let answer = 0;
    for(let a of str) {
        answer += parseInt(a);
    }
    
    return answer;
}
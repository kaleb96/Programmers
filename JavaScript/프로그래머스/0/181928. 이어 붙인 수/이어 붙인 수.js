function solution (num_list) {
    let even = '';
    let odd = '';
    num_list.forEach((checkNum) => {
        if(checkNum % 2 === 0) { // Even
            even += `${checkNum}`;
        } else { // Odd
            odd += `${checkNum}`
        }
    })
    return Number(even) + Number(odd);
}
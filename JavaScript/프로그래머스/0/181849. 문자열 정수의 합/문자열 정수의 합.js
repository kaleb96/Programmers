function solution(num_str) {
   return [...num_str].reduce((acc, cur) => (Number(acc) + Number(cur)));
}
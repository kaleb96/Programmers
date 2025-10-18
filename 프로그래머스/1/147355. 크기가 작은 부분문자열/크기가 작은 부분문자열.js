// 소스 품질 개선을 위한 수정답안
function solution(t, p) {
  const lenP = p.length;
  const lenT = t.length;
  let count = 0;

  for (let i = 0; i <= lenT - lenP; i++) {
    const sub = t.slice(i, i + lenP);
    if (sub <= p) count++;
  }

  return count;
}

/* 기본답안
function solution(t, p) {
    // p와 길이
    // p와 동일한 길이의 숫자 출력
    // 작거다 같은 것들의 횟수 체크
    // t의 길이만큼 반복
    const lenP = p.length;
    const lenT = t.length;
    let count = 0;
    for (let i = 0; i < lenT; i++) {
        const splited = [...t].splice(i,lenP).join('');
        if(splited.length === lenP) {
            // 비교
            const flag = parseInt(splited);
            const parseP = parseInt(p);
            if(flag <= parseP) {
                count += 1;
            }
        }
    }    
    
    return count;
}
*/

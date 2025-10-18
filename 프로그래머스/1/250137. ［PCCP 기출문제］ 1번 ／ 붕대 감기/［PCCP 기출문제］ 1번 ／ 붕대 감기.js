function solution(bandage, health, attacks) {
  const [t, x, y] = bandage;
  const maxHealth = health;
  let time = 0;
  let combo = 0; // 연속 감은 시간
  let idx = 0; // attacks 인덱스

  const lastAttackTime = attacks[attacks.length - 1][0];

  for (time = 1; time <= lastAttackTime; time++) {
    // 공격 시간인지 확인
    if (idx < attacks.length && attacks[idx][0] === time) {
      const damage = attacks[idx][1];
      health -= damage;
      combo = 0; // 붕대 끊김
      idx++; // 다음 공격으로
      if (health <= 0) return -1;
      continue;
    }

    // 공격이 없는 경우 (치유)
    health += x;
    combo++;

    if (combo === t) {
      health += y; // 연속 성공
      combo = 0;
    }

    if (health > maxHealth) health = maxHealth; // 최대 체력 제한
  }

  return health;
}
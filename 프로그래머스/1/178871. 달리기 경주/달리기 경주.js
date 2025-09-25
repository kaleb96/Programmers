function solution(players, callings) {
  // 선수 이름 -> 현재 등수 Map
  const playerToRank = new Map();
  players.forEach((name, i) => {
    playerToRank.set(name, i);
  });

  for (const name of callings) {
    let curRank = playerToRank.get(name);
    let prevRank = curRank - 1;

    if (prevRank >= 0) {
      // 앞선 선수
      const prevPlayer = players[prevRank];

      // swap players 배열
      [players[prevRank], players[curRank]] = [players[curRank], players[prevRank]];

      playerToRank.set(name, prevRank);
      playerToRank.set(prevPlayer, curRank);
    }
  }
  return players;
}
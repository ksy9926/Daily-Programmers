function solution(lottos, win_nums) {
  var answer = [7, 7];
  for (let a of lottos) {
    if (win_nums.includes(a)) {
      answer[0] -= 1;
      answer[1] -= 1;
    } else if (a === 0) {
      answer[0] -= 1;
    }
  }

  if (answer[1] === 7) {
    answer[1] -= 1;
  }
  if (answer[0] === 7) {
    answer[0] -= 1;
  }
  return answer;
}

function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];

  let minCount = lottos.filter((v) => win_nums.includes(v)).length;
  let zeroCount = lottos.filter((v) => !v).length;

  const maxCount = minCount + zeroCount;

  return [rank[maxCount], rank[minCount]];
}

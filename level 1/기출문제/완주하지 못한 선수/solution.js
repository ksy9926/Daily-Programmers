function solution(participant, completion) {
  let answer = {};
  for (let a of participant) {
    answer[a] ? (answer[a] += 1) : (answer[a] = 1);
  }

  for (let b of completion) {
    answer[b] -= 1;
    if (answer[b] === 0) {
      delete answer[b];
    }
  }
  return Object.keys(answer)[0];
}

// reduce 이용
function solution(participant, completion) {
  let table = participant.reduce((acc, cur) => {
    acc[cur] ? (acc[cur] += 1) : (acc[cur] = 1);
    return acc;
  }, {});

  completion.reduce((acc, cur) => {
    if (acc[cur]) acc[cur] -= 1;

    if (acc[cur] === 0) {
      delete acc[cur];
    }

    return acc;
  }, table);

  return Object.keys(table)[0];
}

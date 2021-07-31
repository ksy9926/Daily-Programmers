function solution(N, stages) {
  let answer = new Array(N);
  let people = stages.length;
  answer.fill([0, 0]);
  answer = answer.map((item, idx) => [0, idx + 1]);

  stages.sort((a, b) => a - b);

  for (let i = 0; i < stages.length; i++) {
    if (stages[i] - 1 < N) {
      answer[[stages[i] - 1]][0] += 1;
    }
  }

  for (let i = 0; i < N; i++) {
    const temp = answer[i][0];
    answer[i][0] = temp / people;
    people -= temp;
  }

  answer.sort((a, b) => b[0] - a[0]);
  return answer.map((item) => item[1]);
}

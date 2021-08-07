function solution(answers) {
  let answer = [];
  let answerObj = { 1: 0, 2: 0, 3: 0 };
  let one = [1, 2, 3, 4, 5];
  let two = [2, 1, 2, 3, 2, 4, 2, 5];
  let three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === one[i % 5]) answerObj[1] += 1;
    if (answers[i] === two[i % 8]) answerObj[2] += 1;
    if (answers[i] === three[i % 10]) answerObj[3] += 1;
  }
  const max = Math.max(...Object.values(answerObj));
  for (let [a, b] of Object.entries(answerObj)) {
    if (b === max) {
      answer.push(parseInt(a));
    }
  }
  return answer;
}

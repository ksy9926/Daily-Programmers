function solution(numbers) {
  let answerSet = new Set();
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      answerSet.add(numbers[j] + numbers[i]);
    }
  }

  let answer = [...answerSet];
  answer.sort((a, b) => a - b);
  return answer;
}

function solution(a, b) {
  let answer = 0;
  a.forEach((value, id) => (answer += value * b[id]));
  return answer;
}

function solution(a, b) {
  return a.reduce((acc, _, i) => (acc += a[i] * b[i]), 0);
}

function solution(n) {
  let answer = 1;

  for (let i = 1; i < n / 2; i++) {
    let temp = i;
    let j = i + 1;
    while (temp < n) {
      temp += j;
      j += 1;
    }
    if (temp === n) answer += 1;
  }
  return answer;
}

function solution(n, t, m, p) {
  let numbers = "";
  let answer = "";
  let i = 0;

  while (numbers.length < t * m) {
    numbers += i.toString(n).toUpperCase();
    i += 1;
  }

  numbers = numbers.slice(0, t * m);

  for (let j = 0; j < numbers.length; j++) {
    if (j % m == p - 1) {
      answer += numbers[j];
    }
  }

  return answer;
}

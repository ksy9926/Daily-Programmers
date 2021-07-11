function solution(n, m) {
  var answer = [];
  const multipleNM = n * m;

  while (n !== m) {
    n > m ? (n = n - m) : (m = m - n);
  }
  answer.push(n);
  answer.push(multipleNM / n);
  return answer;
}

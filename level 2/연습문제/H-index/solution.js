function solution(citations) {
  let answer = 0;

  for (let h = 1; h <= citations.length; h++) {
    if (citations.filter((v) => v >= h).length >= h) answer = h;
  }
  return answer;
}

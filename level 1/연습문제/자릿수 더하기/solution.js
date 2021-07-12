function solution(n) {
  return n
    .toString()
    .split("")
    .map((n) => parseInt(n))
    .reduce((acc, cur) => acc + cur);
}

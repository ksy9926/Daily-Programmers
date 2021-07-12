function solution(n) {
  const numList = n
    .toString()
    .split("")
    .map((num) => parseInt(num));
  numList.sort((a, b) => b - a);
  return parseInt(numList.join(""));
}

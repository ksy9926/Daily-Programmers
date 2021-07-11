function solution(n) {
  const root = Math.floor(n ** 0.5);

  return n === root ** 2 ? (root + 1) ** 2 : -1;
}

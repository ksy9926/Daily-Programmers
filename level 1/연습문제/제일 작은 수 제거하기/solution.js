function solution(arr) {
  const minValue = arr.reduce((a, b) => (a > b ? b : a));
  arr = arr.filter((a) => a !== minValue);
  return arr.length ? arr : [-1];
}

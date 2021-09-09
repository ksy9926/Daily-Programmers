function solution(brown, yellow) {
  let width, height;
  for (let i = 1; i <= yellow; i++) {
    height = i;
    width = yellow / i;
    if (brown === 2 * (height + width + 2)) return [width + 2, height + 2];
  }
  return -1;
}

function solution(n) {
  let answer = [];
  let triSnail = new Array(n).fill(0).map((v, i) => new Array(i + 1).fill(0));
  let now = 0;
  let x = -1;
  let y = 0;

  while (n > 0) {
    for (let i = 0; i < n; i++) triSnail[++x][y] = ++now;
    for (let i = 0; i < n - 1; i++) triSnail[x][++y] = ++now;
    for (let i = 0; i < n - 2; i++) triSnail[--x][--y] = ++now;
    n -= 3;
  }

  triSnail.forEach((a) => a.forEach((b) => answer.push(b)));

  return answer;
}

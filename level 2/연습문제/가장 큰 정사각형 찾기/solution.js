function solution(board) {
  let answer = 0;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if ((i === 0) | (j === 0)) {
      } else if (board[i][j]) {
        board[i][j] =
          Math.min(board[i - 1][j - 1], board[i - 1][j], board[i][j - 1]) + 1;
      }
      answer = Math.max(board[i][j] ** 2, answer);
    }
  }
  return answer;
}

// 변수명
function solution(board) {
  let max = 0;
  let x = board.length;
  let y = board[0].length;

  if (x <= 1 || y <= 1) return 1;

  for (let i = 1; i < x; i++) {
    for (let j = 1; j < y; j++) {
      if (board[i][j] >= 1) {
        let min = Math.min(
          board[i - 1][j],
          board[i - 1][j - 1],
          board[i][j - 1]
        );

        board[i][j] = min + 1;
        max = Math.max(max, min + 1);
      }
    }
  }

  return max * max;
}

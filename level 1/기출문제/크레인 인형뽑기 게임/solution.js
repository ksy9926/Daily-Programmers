function solution(board, moves) {
  let answer = 0;
  let stack = [];

  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      const temp = board[j][moves[i] - 1];
      board[j][moves[i] - 1] = 0;
      if (temp != 0) {
        if (stack[stack.length - 1] == temp) {
          stack.pop();
          answer += 2;
        } else {
          stack.push(temp);
        }
        break;
      }
    }
  }
  return answer;
}

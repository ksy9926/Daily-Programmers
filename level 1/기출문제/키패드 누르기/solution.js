function solution(numbers, hand) {
  var answer = "";

  let leftPos = [3, 0];
  let rightPos = [3, 2];

  let keypadPos = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    0: [3, 1],
  };
  let handStr = { left: "L", right: "R" };

  for (let a of numbers) {
    if (a === 1 || a === 4 || a === 7) {
      answer += "L";
      leftPos = keypadPos[a];
    } else if (a === 3 || a === 6 || a === 9) {
      answer += "R";
      rightPos = keypadPos[a];
    } else {
      let left =
        Math.abs(leftPos[0] - keypadPos[a][0]) +
        Math.abs(leftPos[1] - keypadPos[a][1]);
      let right =
        Math.abs(rightPos[0] - keypadPos[a][0]) +
        Math.abs(rightPos[1] - keypadPos[a][1]);
      if (left > right) {
        answer += "R";
        rightPos = keypadPos[a];
      } else if (right > left) {
        answer += "L";
        leftPos = keypadPos[a];
      } else if (hand === "right") {
        answer += "R";
        rightPos = keypadPos[a];
      } else {
        answer += "L";
        leftPos = keypadPos[a];
      }
    }
  }

  return answer;
}

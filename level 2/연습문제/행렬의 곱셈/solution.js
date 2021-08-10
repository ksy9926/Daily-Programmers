function solution(arr1, arr2) {
  let answer = [];

  for (let i = 0; i < arr1.length; i++) {
    const tempArr = [];
    for (let j = 0; j < arr2[0].length; j++) {
      let temp = 0;
      for (let k = 0; k < arr2.length; k++) {
        temp += arr1[i][k] * arr2[k][j];
      }
      tempArr.push(temp);
    }
    answer.push(tempArr);
  }
  return answer;
}

function solution(arr1, arr2) {
  return arr1.map((row) =>
    arr2[0].map((x, y) => row.reduce((a, b, c) => a + b * arr2[c][y], 0))
  );
}

function binaryToArr(x, y, n) {
  let temp = "";
  let nowX = x;
  let nowY = y;

  for (let i = 0; i < n; i++) {
    temp = (nowX % 2 || nowY % 2 ? "#" : " ") + temp;
    nowX = Math.floor(nowX / 2);
    nowY = Math.floor(nowY / 2);
  }
  return temp;
}

function solution(n, arr1, arr2) {
  let answer = [];

  for (let i = 0; i < n; i++) {
    answer.push(binaryToArr(arr1[i], arr2[i], n));
  }

  return answer;
}

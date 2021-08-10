function toBinary(n) {
  let result = "";
  let count = 0;

  while (n > 0) {
    if (n % 2 === 1) count += 1;
    result = String(n % 2) + result;
    n = Math.floor(n / 2);
  }
  return count;
}

function solution(n) {
  for (let i = n + 1; true; i++) {
    if (toBinary(n) === toBinary(i)) return i;
  }
}

// 정규표현식
function solution(n, a = n + 1) {
  return n.toString(2).match(/1/g).length == a.toString(2).match(/1/g).length
    ? a
    : solution(n, a + 1);
}

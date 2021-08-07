function gcd(x, y) {
  while (x != y) {
    x = x > y ? x - y : x;
    y = y > x ? y - x : y;
  }
  return x;
}

function solution(arr) {
  return arr.reduce((acc, cur) => (acc * cur) / gcd(acc, cur), 1);
}

function toDecimal(num) {
  let result = 0;
  for (let i = 0; i < num.length; i++) {
    result += parseInt(num[i] * 3 ** i);
  }

  return result;
}

function toTernary(num) {
  let result = "";
  while (num > 0) {
    result = (num % 3) + result;
    num = Math.floor(num / 3);
  }
  return result;
}

function solution(n) {
  let ternaryN = toTernary(n);
  let decimalN = toDecimal(ternaryN);
  return decimalN;
}

// 간결한 버전
const solution = (n) => {
  return parseInt([...n.toString(3)].reverse().join(""), 3);
};

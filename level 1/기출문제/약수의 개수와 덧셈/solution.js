function findDivisor(num) {
  let result = 0;

  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      result += 1;
    }
  }

  return result % 2 === 0 ? num : -num;
}

function solution(left, right) {
  let answer = 0;

  for (let i = left; i <= right; i++) {
    answer += findDivisor(i);
  }

  return answer;
}

// 제곱근이 있으면 홀수
function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}

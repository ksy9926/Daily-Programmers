function solution(number, k) {
  var stack = [];

  for (var i = 0; i < number.length; i++) {
    let currentDigit = number[i];

    // 아직 k개 만큼 지워지지 않았고
    // result의 맨 뒤 숫자보다 현재의 숫자가 큰 경우
    while (k > 0 && stack[stack.length - 1] < currentDigit) {
      stack.pop();
      k--;
    }

    // 현재 숫자를 뒤에 붙인다.
    stack.push(currentDigit);
  }

  // '9999991'인 경우 k개 만큼 제거되지 않을 수 있음
  if (k > 0) {
    stack = stack.slice(0, stack.length - k);
  }

  return stack.join("");
}

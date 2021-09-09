function rotate(s) {
  return s.slice(1) + s[0];
}

function rightString(s) {
  let closeObj = { ")": "(", "]": "[", "}": "{" };
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (stack.length) {
      if (!closeObj[s[i]]) {
        stack.push(s[i]);
      } else if (closeObj[s[i]] === stack[stack.length - 1]) {
        stack.pop();
      } else {
        return false;
      }
    } else stack.push(s[i]);
  }
  return stack.length ? false : true;
}

function solution(s) {
  var answer = 0;

  for (let i = 0; i < s.length; i++) {
    s = rotate(s);
    answer = rightString(s) ? answer + 1 : answer;
  }
  return answer;
}

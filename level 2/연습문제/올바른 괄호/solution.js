function solution(s) {
  let answer = true;
  const stack = [];
  let closeObj = {
    ")": "(",
  };

  for (let a of s) {
    if (a === "(") stack.push(a);
    else if (stack.length && stack[stack.length - 1] === "(") {
      stack.pop();
    } else return false;
  }

  return stack.length ? false : true;
}

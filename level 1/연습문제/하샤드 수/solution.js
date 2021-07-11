function solution(x) {
  var answer = true;
  let eachSum = 0;
  const strX = String(x);

  for (let i = 0; i < strX.length; i++) {
    eachSum += parseInt(strX[i]);
  }

  x % eachSum === 0 ? (answer = true) : (answer = false);

  return answer;
}

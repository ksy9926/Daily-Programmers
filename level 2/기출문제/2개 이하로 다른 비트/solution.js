function solution(numbers) {
  var answer = [];

  for (let number of numbers) {
    let binaryNumber = number.toString(2);
    if (binaryNumber.match(/0$/)) {
      answer.push(number + 1);
    } else {
      const oneNumber = binaryNumber.match(/1+$/)[0].length;
      answer.push(number + 2 ** oneNumber - 2 ** (oneNumber - 1));
    }
  }
  return answer;
}

function solution(numbers) {
  var answer = [];
  let c;
  numbers.forEach((v) => {
    if (v < 2 || v % 2 === 0) {
      answer.push(v + 1);
    } else {
      let c = 2;
      while (true) {
        if ((v + 1) % (c * 2) === 0) {
          c = c * 2;
        } else {
          break;
        }
      }
      answer.push(v + c / 2);
    }
  });
  return answer;
}

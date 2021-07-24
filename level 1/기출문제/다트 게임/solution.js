function solution(dartResult) {
  let answer = [];
  let re = /\d+\D\*?\#?/g;
  let arr = dartResult.match(re);
  let bonus = {
    S: 1,
    D: 2,
    T: 3,
  };

  for (let a of arr) {
    const score = a.match(/\d+/)[0];
    const s = a.match(/\D/)[0];
    const star = a.match(/\*/);
    const sharp = a.match(/\#/);
    if (star) {
      answer[answer.length - 1] *= 2;
      answer.push(2 * score ** bonus[s]);
    } else if (sharp) {
      answer.push(-(score ** bonus[s]));
    } else {
      answer.push(score ** bonus[s]);
    }
  }
  return answer.reduce((acc, cur) => acc + cur);
}

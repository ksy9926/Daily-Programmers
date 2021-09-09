function solution(words) {
  // 3905(5 + 25 + 125 + 625 + 3125) + 0을 포함한 것 지워줄 3905
  let answer = new Array(7810);

  answer.fill(0);
  answer = answer
    .map((a, i) => (i + 1).toString(6))
    .map((v) => {
      return v
        .replace(/1/gi, "A")
        .replace(/2/gi, "E")
        .replace(/3/gi, "I")
        .replace(/4/gi, "O")
        .replace(/5/gi, "U");
    })
    .filter((v) => !/0/gi.test(v));

  answer.sort();
  return answer.indexOf(words) + 1;
}

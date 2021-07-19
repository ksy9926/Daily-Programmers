function solution(s) {
  let answer = "";
  let j = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] == " ") {
      j = 0;
      answer += " ";
      continue;
    }
    j % 2 == 0
      ? (answer += s[i].toUpperCase())
      : (answer += s[i].toLowerCase());
    j += 1;
  }
  return answer;
}

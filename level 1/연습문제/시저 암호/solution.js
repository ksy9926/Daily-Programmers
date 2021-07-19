function solution(s, n) {
  let answer = "";
  // A : 65  Z : 90  a: 97  z: 122

  for (let i = 0; i < s.length; i++) {
    let ascii = s[i].charCodeAt();
    if (s[i] === " ") {
      answer += " ";
    } else if (ascii >= 65 && ascii <= 90) {
      ascii = ((ascii - 65 + n) % 26) + 65;
      answer += String.fromCharCode(ascii);
    } else if (ascii >= 97 && ascii <= 122) {
      ascii = ((ascii - 97 + n) % 26) + 97;
      answer += String.fromCharCode(ascii);
    }
  }
  return answer;
}

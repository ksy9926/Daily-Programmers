// a.charAt(0) 대신 a[0] 쓰면 안됨.
// 예를들어 a = "" 이러한 공백인 경우
// a.charAt(0) = "" 가 나오지만 a[0] 는 undefined가 나오기때문에 toUpperCase() 함수 적용이 안된다.
function solution(s) {
  return s
    .split(" ")
    .map((a) => a.charAt(0).toUpperCase() + a.slice(1).toLowerCase())
    .join(" ");
}

function solution(s) {
  var answer = "";
  for (let i = 0; i < s.length; i++) {
    if (i === 0 || s[i - 1] === " ") {
      answer += s[i].toUpperCase();
    } else {
      answer += s[i].toLowerCase();
    }
  }
  return answer;
}

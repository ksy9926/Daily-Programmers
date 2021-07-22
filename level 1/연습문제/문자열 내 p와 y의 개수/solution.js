function solution(s) {
  let p = 0;
  let y = 0;

  for (let c of s) {
    if (c.toLowerCase() === "p") {
      p += 1;
    } else if (c.toLowerCase() === "y") {
      y += 1;
    }
  }

  return p === y ? true : false;
}

// 정규표현식
function solution(s) {
  return s.match(/p/gi).length == s.match(/y/gi).length;
}

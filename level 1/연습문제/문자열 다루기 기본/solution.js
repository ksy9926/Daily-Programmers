function solution(s) {
  if (s.length !== 4 && s.length !== 6) return false;

  for (let a of s) {
    if (Number.isNaN(Number(a))) return false;
  }

  return true;
}

// 정규표현식
let regex = /^\d{6}$|^\d{4}$/;
return regex.test(s);

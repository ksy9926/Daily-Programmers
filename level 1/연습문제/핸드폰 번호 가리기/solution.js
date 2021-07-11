function solution(phone_number) {
  let answer = "";
  const LEN = phone_number.length;

  answer = "*".repeat(LEN - 4) + phone_number.slice(-4);
  return answer;
}

function solution(phone_number) {
  return phone_number.replace(/\d(?=\d{4})/g, "*");
}

function solution(new_id) {
  let answer = new_id.toLowerCase();
  let re = /[a-z0-9-_.]/g;
  answer = answer.match(re).join("");
  answer = answer.replace(/\.+/g, ".");
  answer = answer.replace(/^\.|\.$/, "");
  answer = answer.replace(/^$/, "a");
  answer = answer.slice(0, 15);
  answer = answer.replace(/\.$/, "");
  let len = answer.length;
  return len <= 2 ? answer + answer.charAt(len - 1).repeat(3 - len) : answer;
}

// 체이닝
function solution(new_id) {
  const answer = new_id
    .toLowerCase() // 1
    .replace(/[^\w-_.]/g, "") // 2
    .replace(/\.+/g, ".") // 3
    .replace(/^\.|\.$/g, "") // 4
    .replace(/^$/, "a") // 5
    .slice(0, 15)
    .replace(/\.$/, ""); // 6
  const len = answer.length;
  return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}

function solution(msg) {
  var answer = [];
  const dic = {};
  for (let i = 1; i <= 26; i++) {
    dic[String.fromCharCode(i + 64)] = i;
  }
  let lastIndex = 26;
  let i = 0;

  while (i < msg.length) {
    let prev;
    let now = msg[i];
    let j = i;
    while (dic[now]) {
      prev = now;
      j += 1;
      now += msg[j];
    }
    i = j;
    answer.push(dic[prev]);
    lastIndex += 1;
    dic[now] = lastIndex;
  }

  return answer;
}

function solution(msg) {
  const dict = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").reduce((dict, c, i) => {
    dict[c] = i + 1;
    return dict;
  }, {});
  dict.nextId = 27;
  const ans = [];
  for (let i = 0, j = 0; i < msg.length; i = j) {
    j = msg.length;
    let longest = "";
    while (dict[(longest = msg.substring(i, j))] === undefined) --j;
    ans.push(dict[longest]);
    dict[longest + msg[j]] = dict.nextId++;
  }

  return ans;
}

function solution(n, words) {
  let answer = [0, 0];
  let last = words[0][words[0].length - 1];
  let done = [words[0]];

  for (let i = 1; i < words.length; i++) {
    const word = words[i];

    if (last === word[0] && !done.includes(word)) {
      last = word[word.length - 1];
      done.push(word);
    } else {
      const number = (i % n) + 1;
      const turn = Math.floor(i / n) + 1;
      answer = [number, turn];
      break;
    }
  }

  return answer;
}

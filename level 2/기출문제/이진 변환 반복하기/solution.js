function solution(s) {
  function binaryChange(n) {
    if (n === "1") {
      return;
    }
    answer[0] += 1;
    const oneCount = n.match(/1/g).length;
    answer[1] += n.length - oneCount;
    return binaryChange(oneCount.toString(2));
  }
  let answer = [0, 0];
  binaryChange(s);
  return answer;
}

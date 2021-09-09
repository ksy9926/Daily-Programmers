function solution(clothes) {
  let answer = 1;
  let obj = {};

  // 1번 예시의 경우.
  // headgear는 2개 (0, 0), (0, 1), (1, 0) 의 3가지(둘 다 착용할 수는 없다.)
  // eyewear는 1개 (0), (1) 의 2가지
  // 즉 같은 종류의 경우 n+1가지.
  // 총 착용 조합은 곱한 값에서 모두 착용하지 않은 경우 -1 을 해주어야 한다.
  for (let i = 0; i < clothes.length; i++) {
    obj[clothes[i][1]] = (obj[clothes[i][1]] || 0) + 1;
  }

  for (let key in obj) {
    console.log(obj[key]);
    answer *= obj[key] + 1;
  }

  return answer - 1;
}

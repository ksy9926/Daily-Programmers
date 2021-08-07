function solution(n, lost, reserve) {
  const same = reserve.filter((a) => lost.includes(c));
  reserve = reserve.filter((a) => !same.includes(a));
  lost = lost.filter((a) => !same.includes(a));

  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);

  return (
    n -
    lost.filter((a) => {
      const b = reserve.find((r) => Math.abs(r - a) <= 1);
      console.log(b);
      if (!b) return true;
      console.log(b);
      reserve = reserve.filter((r) => r !== b);
    }).length
  );
}

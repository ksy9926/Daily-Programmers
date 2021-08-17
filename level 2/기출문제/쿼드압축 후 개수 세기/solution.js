function quarter(arr) {
  const len = arr.length ** 2;
  const temp = [...arr];
  for (let i = 0; i < temp.length; i++) {
    temp[i] = temp[i].join("");
  }
  const same = temp.join("").match(/1/g);
  if (!same) {
    return [1, 0];
  } else if (same.length === len) {
    return [0, 1];
  } else {
    const half = arr.length / 2;
    let a = quarter(arr.slice(0, half).map((y) => y.slice(0, half)));
    let b = quarter(arr.slice(half).map((y) => y.slice(0, half)));
    let c = quarter(arr.slice(0, half).map((y) => y.slice(half)));
    let d = quarter(arr.slice(half).map((y) => y.slice(half)));
    return [a[0] + b[0] + c[0] + d[0], a[1] + b[1] + c[1] + d[1]];
  }
}

function solution(arr) {
  return quarter(arr);
}

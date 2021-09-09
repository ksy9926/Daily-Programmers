function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  let q = [];

  while (truck_weights.length) {
    answer += 1;

    if (q.length === bridge_length) {
      weight += q.shift();
    }

    if (truck_weights[0] > weight) {
      q.push(0);
    } else {
      weight -= truck_weights[0];
      q.push(truck_weights.shift());
    }

    if (!truck_weights.length) {
      answer += bridge_length;
      break;
    }
  }
  return answer;
}

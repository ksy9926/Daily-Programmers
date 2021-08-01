function findPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }

  return true;
}

function solution(nums) {
  let sums = [];

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let sum = nums[i] + nums[j] + nums[k];
        if (findPrime(sum)) sums.push(sum);
      }
    }
  }
  return sums.length;
}

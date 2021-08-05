function solution(nums) {
  const numsSet = new Set(nums);
  const size = numsSet.size;

  return nums.length / 2 > size ? size : nums.length / 2;
}

let dp = [];

function solution(n) {
  for (let i = 0; i <= n; i++) {
    if (i === 0) dp[i] = 0;
    else if (i === 1) dp[i] = 1;
    else dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
  }
  return dp[n];
}

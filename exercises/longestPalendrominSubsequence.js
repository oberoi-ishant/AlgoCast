// Given a string find the largest palendromic subsequence.

// Input: 'agbcba'
// Output: 5

// So now if you see Palendrome means a string that reads same
// from left to right and righ to left.
// Therefore if we reverse the first string we get second string.
// Now if we find Longest Common Subsequence in them, that is the
// one which is common in both the strings and reads same
// from left or from right. As second string is reverse of first
// string.

// Steps.
// s1: agbcba
// s2: s1.reverse()
// find LCS.

let dp;
function longestPalendromicSub(s1) {
  const s2 = s1.split('').reverse().join('');
  const n = s1.length;
  const m = s2.length;
  dp = new Array(n+1);
  for(let i=0; i<n+1; i++) {
    dp[i] = new Array(m+1);
    dp[i].fill(-1);
  }
  const res = LCS(s1, s2, n, m);
  return res;
}

function LCS(s1,s2,n,m) {
  // Base condition
  if(n==0||m==0) {
    return 0;
  }

  if(dp[n][m] !== -1) {
    return dp[n][m];
  }

  if(s1[n-1] == s2[m-1]) {
    dp[n][m] = 1+LCS(s1,s2,n-1,m-1);
    return dp[n][m];
  }

  if(s1[n-1] !== s2[m-1]) {
    const ch1 = LCS(s1,s2,n,m-1);
    const ch2 = LCS(s1,s2,n-1,m);
    dp[n][m] = Math.max(ch1, ch2);
    return dp[n][m];
  }

}


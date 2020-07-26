
// sequencePatternMatching.js
// Given two strings, s1 and s2.
// Check if s1 is susequence of s2.

// s1: 'eap'
// s2: ''heaps

// This question can also be asked like
// check if any string is a subsequence of other string.
// So we know subsequence range can be from 0 to min(s1, s2).
// Coz smaller string needs to be fully present as a
// subsequence in bigger string.
// So just find the LCS and check if its length is equal to
// the smaller string.
// Bottom Up Solution. ie Recursion + DP

let dp;
function lengthOfLCS(s1, s2) {
  const n = s1.length;
  const m = s2.length;
  dp = new Array(n+1);
  for(let i=0; i<n+1; i++) {
    dp[i] = new Array(m+1);
    dp[i].fill(-1);
  }
  const minLen = Math.min(n, m);
  const lcsLen = LCS(s1, s2, n, m);
  return lcsLen === minLen;
}

function LCS(s1, s2, n, m) {
  // Base condition
  if (n==0 || m==0) {
    return 0;
  }

  if(dp[n][m] !== -1) {
    return dp[n][m];
  }

  if(s1[n-1] == s2[m-1]) {
    dp[n][m] = 1+LCS(s1, s2, n-1 ,m-1);
    return dp[n][m];
  } else {
    dp[n][m] = Math.max(LCS(s1,s2, n, m-1), LCS(s1,s2, n-1, m));
    return dp[n][m];
  }
}
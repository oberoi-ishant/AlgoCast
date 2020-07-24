
// Find the minimum deletions required to make a string
// Palendrome.
// So for minimum no of deletions we want to make
// the longest palendrome from the string.
// Hence calculate Longest Palendromic Subsequence.
// If we take the LCS of string and reverse string then we
// get the common chars in string in sequence.
// We can delete the remaing chars in string to make it palendrome.
// So len(s1) - len(LCS) is required no. of deletions.


// Steps:
// Input: s1 'agbcba'
// Output: 1

// So find the longestPalendromic subsequence of the string.
// Then return len(s1) - len(LCS)

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
  const lenLCS = LCS(s1, s2, n, m);
  return `No. of deletions: ${n - lenLCS}`;
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

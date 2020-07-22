
// Given two strings find the lenght of the LCS
// Longest Common Subsequence
// Subsequence can be discontinuous.
// substring is continuous.

// Example:
// Input: s1 = 'abcdgh', s2 = 'abedfhr'
// So longest common subsequence: 'abdh' and its lenght = 4

// Recursive way.
// Steps:
// 1. Start from the last chars of both the strings. n-1, m-1
// if n-1 == m-1, means one common char. so continue recur calls
// with reduced length and add 1. 1+recucall(n-1,m-1) as one count is
// got.
// if n-1 !== m-1, we have two choices:
// First Choice. reduce length of n string by 1 and keep m as it is
// call the recur func. recur(n-1, m)
// Second Choice. reduce length of m string by 1 and keep n as it is.
// call recur func. recur(n, m-1).
// We want the max count from both the choices. Max(choice1, choice2)


function longestCommonSubsequence(s1, s2) {
  const n = s1.length;
  const m = s2.length;
  return LCS(s1, s2, n, m);
}

function LCS(s1, s2, n, m) {
  // Base condition
  // smalled valid input.
  // string of length 0. empty strings. s1 and s2
  if (n == 0 || m == 0) {
    // if either string is zero, we cannot have LCS count.
    return 0;
  }

  if (s1[n-1] == s2[m-1]) {
    // one match. so count is 1 more.
    return 1+LCS(s1, s2, n-1, m-1);
  } else {
    // Now we have two choices.
    // reduce s2 and keep s1 as it is.
    const ch1 = LCS(s1,s2, n-1, m);
    // reduce s1 and keep s2 as it is.
    const ch2 = LCS(s1, s2, n, m-1);
    // From both the branches, we want the maximum count of commons.
    return Math.max(ch1, ch2);
  }

}


// Memoization/ Bottom Up Approach.
let dp;
function longestCommonSubsequence(s1, s2) {
  const n = s1.length;
  const m = s2.length;
  dp = new Array(n+1);
  for(let i=0; i<n+1; i++) {
    dp[i] = new Array(m+1);
    dp[i].fill(-1);
  }
  return LCS(s1, s2, n, m);
}

function LCS(s1, s2, n, m) {
  // Base condition
  // smalled valid input.
  // string of length 0. empty strings. s1 and s2
  if (n == 0 || m == 0) {
    // if either string is zero, we cannot have LCS count.
    return 0;
  }

  if(dp[n][m] !== -1) {
    return dp[n][m];
  }

  if (s1[n-1] == s2[m-1]) {
    // one match. so count is 1 more.
    dp[n][m] = 1+LCS(s1, s2, n-1, m-1);
    return dp[n][m];
  } else {
    const ch1 = LCS(s1,s2, n-1, m);;
    const ch2 = LCS(s1, s2, n, m-1);;
    dp[n][m] = Math.max(ch1, ch2);
    return dp[n][m];
  }

}


// Iterative Approach/Top Down.

function longestCommonSubsequence(s1, s2) {
  const n = s1.length;
  const m = s2.length;
  let dp = new Array(n+1);
  // Initialization
  for(let i=0; i<n+1; i++) {
    dp[i] = new Array(m+1);
    dp[i].fill(-1);
  }

  // Base condition
  for(let i=0; i<n+1; i++) {
    for(let j=0; j<m+1; j++) {
      if(i==0 || j==0) {
        dp[i][j] = 0;
      }
    }
  }
  // start from 1.
  for(let i=1; i<n+1; i++) {
    for(let j=1; j<m+1; j++) {
      if(s1[i-1] == s2[j-1]) {
        dp[i][j] = 1+dp[i-1][j-1];
      } else {
        // reduce i keep j same
        const ch1 = dp[i-1][j];
        // reduce j keep i same
        const ch2 = dp[i][j-1];
        // get the max from both the choices
        dp[i][j] = Math.max(ch1, ch2);
      }
    }
  }
  return dp[n][m];
}
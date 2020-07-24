
// Given two string, print the Longest Common Subsequence.
// s1 = 'acbef' s2= 'axbegf'

// Solution use Top Down Approach.
// Get the dp array for Top Down to get the
// count of LCS.
// Not traveserse this array as shown in pic to get all the
// chars common. Add them to a string.
// Now reverse this string to get the LCS chars.
// Check Image: PrintLCS or https://www.geeksforgeeks.org/printing-longest-common-subsequence/
// For such questions, use Top-Down as in recursive we will not
// ensure which subtree is calling and we will get mutliple values
// printed. Hence use Top-Down approach.

let dp;
function printLCS(s1, s2) {
  longestCommonSubsequence(s1, s2);
  // Now traverse the dp starting from dp[n][m]
  // Coz answer of count is at dp[n][m]
  let i = s1.length; // n
  let j = s2.length; // m
  let tempStr = '';
  while(i > 0 && j > 0) {
    // element will be at n-1, m-1 last index
    if(s1[i-1] == s2[j-1] && s1[i-1] !== undefined) {
      tempStr+=s1[i-1];
      i--;
      j--;
    } else {
      const ch1 = dp[i-1][j];
      const ch2 = dp[i][j-1];
      if (ch1 >= ch2) {
        i--;
      } else {
        j--;
      }
    }
  }
  return tempStr.split('').reverse().join('');
}


function longestCommonSubsequence(s1, s2) {
  const n = s1.length;
  const m = s2.length;
  dp = new Array(n+1);
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

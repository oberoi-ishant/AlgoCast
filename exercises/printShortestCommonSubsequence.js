// Print Shortest Common Subpersequence.
// https://www.geeksforgeeks.org/print-shortest-common-supersequence/
// s1: acbef
// s2: axbegf

// So we know shorted common is supersequence string
// with min lenght with the help of which we can derive
// both the strings s1 and s2.
// We also know how to prinst LCS. Shorted Common Subsequence.
// We said to calculate Shortest common superseuqence length
// we calculate shortest common subsequence and them substract
// its length from the total length s1+s2.
// As chars in shorts common supersequence are counted twice
// in s1+s2.

// We also know how to traverse the LCS matrix to get
// the longest common subsequence.

// Check Image: PrintLCS
// Here whenever we has string match we added them to the
// result string.
// We can traverse the same to get the Shorted Common Supersequence.

// Steps:
// Traverse the dp for LCS.
// When chars match add to result string.
// When chars don't match:
// we check ch[i-1][j] and ch[i][j-1]
// And traverse to the side of maximum count.
// Now here in doing so just add the smaller ch number char
// to the result string.
// Make sure you understand the image PrintLCS else
// this logic is hard to get.

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
      // This it this way.
      // rows are for string s1 and columns are for string s2.
      // if you are staying on the same row you will process its
      // char in next iteration. Since you are moving away from
      // the current column, add that char[j-1] from s2 in result.
      //
      // Similary if you are staying on the same column,
      // you will process its element in next pass.
      // So before reducing the row, add that char[i-1] from s1
      // to result. As s1 is on row and s2 on column
      if (ch1 >= ch2) {
        tempStr+=s1[i-1];
        i--;
      } else {
        tempStr+=s2[j-1];
        j--;
      }
    }
  }

  // Now we can have a case where either i > 0 or j > 0
  // When the loop above exists. As condition is &&.
  // If any one or i,j is 0 we return.
  // So that means one string either s1 or s2 will have some
  // chars still left to be processed.
  // We will just run the loop and add them to the
  // result string.
  while(i>0) {
    tempStr+=s1[i-1];
    i--;
  }

  while(j>0) {
    tempStr+=s2[j-1];
    j--;
  }
  // Out of these only one loop will run, as
  // one of i or j is zero.
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
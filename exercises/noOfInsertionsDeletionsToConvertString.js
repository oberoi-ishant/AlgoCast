
// Count the number of insertions and deletions to convert
// a string s1 to s2.
// s1: 'heap'
// s2: 'pea'
// Ouput is: from S1 2 deletions...of h and p make  it ea.
// Now add p to it makes pea, ie s2. So 2 deletions and 1 insertions.

// Solution:
// As you can see we can first find the LCS longest common subsequence.
// This will be ea in this example.
// Now rest of the chars in s1 are not in S2 so delete them.
// Total deletions = len(s1) - len(lcs)
// Now, similary insertions will be len(s2) - len(lcs). Coz these
// many chars are not present in lcs, so insert them.

function countInsertionDeletion(s1, s2) {
  const n = s1.length;
  const m = s2.length;

  // Lets find lcs.
  let dp = new Array(n+1);
  for(let i=0; i<n+1; i++) {
    dp[i] = new Array(m+1);
    dp[i].fill(-1);
  }

  for(let i=0; i<n+1; i++) {
    for(let j=0; j<m+1; j++) {
      if(i==0 || j==0) {
        dp[i][j] = 0;
      } else if (s1[i-1] == s2[j-1]) {
        dp[i][j] = 1+dp[i-1][j-1];
      } else {
        dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
      }
    }
  }

  // Now length of LCS is in dp[n][m];
  const countOfCharsExtraInS1 = s1.length - dp[n][m];
  const countOfCharsNotInS1ButS2 = s2.length - dp[n][m];
  return `Deletions ${countOfCharsExtraInS1} Insertions ${countOfCharsNotInS1ButS2}`;
}



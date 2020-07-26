
// Given a string find the minimum number of
// insertions to make it a palendrome.

// Input: 'hello'

// So to make string palendrome we should be
// able to have string read same from left to right
// and right to left.

// So s1 = 'hello'
// s2 = 'hello'.reverse()

// We now see s1 = 'hello'
// s2 = 'olleh'
// Now if we take (LPS) Longest Palendromic Subsequence from it,
// we will get 'll'.
// Now we see, we have 3 chars h e o which are not in
// LPS. If we delete them we have a palendrome. 'll'

// Also if we add the same h e o to the other side we
// can make a palendrome.
// heolloeh ... To understand this, say we divide a line
// from middle of hello and then see the char, if char is
// present on one side, add it to the other side.
// Do this for three chars h e o and we have converted
// the string to palendrome.


// So number of insertions or deletions to make a string
// palendrome are same. len(str) - len(LPS).

function longestPalendromicSubseq(s1) {
  const s2 = s1.split('').reverse().join('');
  const n = s1.length;
  const m = s2.length;

  // create matrix n+1 m+1
  let dp = new Array(n+1);
  for(let i=0; i<n+1; i++) {
    dp[i] = new Array(m+1);
    dp[i].fill(-1);
  }

  // Base Condition
  for(let i=0; i<n+1; i++) {
    for(let j=0; j<m+1; j++) {
      if(i==0 || j==0) {
        dp[i][j] = 0;
      }
    }
  }

  // Choice Diagram
  for(let i=1; i<n+1; i++) {
    for(let j=1; j<m+1; j++) {
      if(s1[i-1] == s2[j-1]) {
        dp[i][j] = 1+dp[i-1][j-1];
      } else {
        dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
      }
    }
  }

  return `Insertions required  ${n-dp[n][m]}`;
}


// Image: longestCommonSubstring.jpg
// longestCommonSubstring.js
// Given two strings find the length of longest common substring.
// Subsequence can be discontinuous. (but order is same.)
// substring is continuous.

// Example:
// Input: s1 = 'abcdgh', s2 = 'abedfhr'
// So longest common substring: 'ab' and its length = 2

// Recursive
// https://www.geeksforgeeks.org/longest-common-substring-dp-29/
function longestCommonSubstring(s1, s2) {
  let n = s1.length;
  let m = s2.length;
  let initialCount = 0;
  return longestCommonSubtr(s1, s2, n, m, initialCount);
}

function longestCommonSubtr(s1,s2, n, m, count) {
  if(n==0 || m==0) {
    return count;
  }

  if(s1[n-1] == s2[m-1]) {
    count = longestCommonSubtr(s1, s2, n-1, m-1, count+1);
  }
  // This is a very interesting question.
  // See if we have strings s1='cdc', s2='acdcbdc'
  // if we do n-1, m-1 when string matches we increase count by 1
  // but when the no match happens if we have else after the if condition,
  // we now start match from say (if 2 elemenst matched already) n-2 and m-2.
  // Now say cdc is smaller string, it is now already at m-2 = just 'c'
  // we compare the rest of the string(s2-2) 'acdcb' with left over s1 which is c.
  // But we want to store the matched count and start again in order to find a substring
  // somewhere in the middle of s2 also. So s1 should also start from the next char after
  // matching first char and not n-countOfMatched already.
  // Therefore, we want to contiue the iteration. Hence we will not use else block
  // rather continue with choices lcs(n-1, m) and lcs(n, m-1) to match a substring
  // again in the middle or somewhere else in the second string.
  // else {
  //   const ch1 = longestCommonSubtr(s1, s2, n, m-1, 0);
  //   const ch2 = longestCommonSubtr(s1, s2, n-1, m, 0);
  //   count = Math.max(count, Math.max(ch1, ch2));
  // }
  // There adding else will remove the above cases, and answer will be wrong.
  // Hence continue with choices and NO else.
  const ch1 = longestCommonSubtr(s1, s2, n, m-1, 0);
  const ch2 = longestCommonSubtr(s1, s2, n-1, m, 0);
  count = Math.max(count, Math.max(ch1, ch2));
  return count;
}

// Self tried
let maxCount = 0;
function longestCommonSubstring(s1, s2) {
  let n = s1.length;
  let m = s2.length;
  let initialCount = 0;
  longestCommonSubtr(s1, s2, n, m, initialCount);
  return maxCount;
}

function longestCommonSubtr(s1,s2, n, m, count) {
  if(n==0 || m==0) {
    return maxCount;
  }

  if(s1[n-1] == s2[m-1]) {
    count++;
    longestCommonSubtr(s1, s2, n-1, m-1, count);
  }
  // This is a very interesting question.
  // See if we have strings s1='cdc', s2='acdcbdc'
  // if we do n-1, m-1 when string matches we increase count by 1
  // but when the no match happens if we have else after the if condition,
  // we now start match from say (if 2 elemenst matched already) n-2 and m-2.
  // Now say cdc is smaller string, it is now already at m-2 = just 'c'
  // we compare the rest of the string(s2-2) 'acdcb' with left over s1 which is c.
  // But we want to store the matched count and start again in order to find a substring
  // somewhere in the middle of s2 also. So s1 should also start from the next char after
  // matching first char and not n-countOfMatched already.
  // Therefore, we want to contiue the iteration. Hence we will not use else block
  // rather continue with choices lcs(n-1, m) and lcs(n, m-1) to match a substring
  // again in the middle or somewhere else in the second string.
  // else {
  //   const ch1 = longestCommonSubtr(s1, s2, n, m-1, 0);
  //   const ch2 = longestCommonSubtr(s1, s2, n-1, m, 0);
  //   count = Math.max(count, Math.max(ch1, ch2));
  // }
  // There adding else will remove the above cases, and answer will be wrong.
  // Hence continue with choices and NO else.
  if (maxCount < count) {
    maxCount = count;
  }
  count = 0; // reset count when char does not match
  const ch1 = longestCommonSubtr(s1, s2, n, m-1, count);
  const ch2 = longestCommonSubtr(s1, s2, n-1, m, count);
  console.log(ch1, ch2);
}

// Memization|Bottom Up.
// Not working correctly.
let dp;
function longestCommonSubstring(s1, s2) {
  let n = s1.length;
  let m = s2.length;
  let initialCount = 0;
  dp = new Array(n+1);
  for(let i=0; i<n+1; i++) {
    dp[i] = new Array(m+1);
    dp[i].fill(-1);
  }
  return longestCommonSubtr(s1, s2, n, m, initialCount);
}

function longestCommonSubtr(s1,s2, n, m, count) {
  if(n==0 || m==0) {
    return count;
  }

  if (dp[n][m] !== -1) {
    return dp[n][m];
  }

  if(s1[n-1] == s2[m-1]) {
    count = longestCommonSubtr(s1, s2, n-1, m-1, count+1);
  }

  const countChoice1 = longestCommonSubtr(s1, s2, n, m-1, 0);
  const countChoice2 = longestCommonSubtr(s1, s2, n-1, m, 0);
  count = Math.max(count, countChoice1, countChoice2);
  dp[n][m] = count;
  return dp[n][m];
}

// Iterative approach.
function longestCommonSubstring(s1, s2) {
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
        // if they dont match reset to 0
        // as count
        dp[i][j] = 0
      }
    }
  }
  // Now you have the table. You need to traverse it to
  // get the max value.
  let maxCount = 0;
  for(let i=1; i<n+1; i++) {
    for(let j=1; j<m+1; j++) {
      if (dp[i][j] > maxCount) {
        maxCount = dp[i][j];
      }
    }
  }
  return maxCount;
}
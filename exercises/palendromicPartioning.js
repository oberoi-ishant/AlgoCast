// Given a string, a partitioning of the string is a palindrome partitioning
// if every substring of the partition is a palindrome.
// For example, “aba|b|bbabb|a|b|aba” is a palindrome partitioning of “ababbbabbababa”.
// Determine the fewest cuts needed for a palindrome partitioning of a given string.
// For example, minimum of 3 cuts are needed for “ababbbabbababa”.
// The three cuts are “a|babbbab|b|ababa”.
// If a string is a palindrome, then minimum 0 cuts are needed.
// If a string of length n containing all different characters,
// then minimum n-1 cuts are needed.

// Example: abcde ... a|b|c|d|e ie (length - 1) 4 cuts required.
// Example: 'madam' = 0 cuts. Already a palendrome.

// Steps from MCM Matrix Chain Multiplication.
// Choose correct values of i,j
// Get the correct base condition.
// Compute the k scheme.
// find the answer from temporary answers.
// return answer.

function main(str) {
  const n = str.length;
  // Here we have a string
  // 'HELLO'
  // We can start i = 0; this gives us one char N. Correct.
  // We can take j = length - 1; gives us last char N. Correct.
  // So i can start from 0 and j can be length - 1;
  return palendromePartition(str, 0, n-1);
}


function palendromePartition(str, i, j) {
  // Here we have a string
  // 'HELLO'
  // Now, Base condition.
  // If we are left with one char, it is palendrome. Correct.
  // Also as per question if the passed string is palendrome, we do not partition.
  // No further cuts required.
  if (isPalendrome(str, i, j)) {
    return 0; // no further cuts required. no more partioning.
  }

  // K scheme. We want to partition this string.
  // let us start k from i. k = i; and i = 0;
  // We have one option func(str, i, k) ... func(str, 0, 0) one partition with one char H.
  // func(str, k+1, j) ... 'ELLO'
  // now When k = j (after some k++), we have two options
  // func(str, i, k) ... 'HELLO'
  // func(str, k+1, j) ... '' empty. Therefore, will take k to maximum j - 1;
  let min = Number.POSITIVE_INFINITY;
  for(let k=i; k < j; k++) {
    let partOne = palendromePartition(str, i, k);
    let partTwo = palendromePartition(str, k+1, j);
    let tempCount = partOne + partTwo + 1; // (plus 1, as this is one partition done)
    min = Math.min(min, tempCount);
  }
  return min;
}

function isPalendrome(str, i, j) {
  // i and j are start and end index
  if (i >=0 && j >=0) {
    while(i<=j) {
      if(str[i] == str[j]) {
        i++;
        j--;
      } else {
        return false;
      }
    }
    return true;
  }
  return false;
}

// Top Down Approach
// https://www.youtube.com/watch?v=lDYIvtBVmgo MUST WATCH
// https://www.geeksforgeeks.org/palindrome-partitioning-dp-17/
// Create a 2D array with same string.
// A[n][n]
// We here consider that at 0th index we start string, so it is till n and not n-1.
// Trick here is, always consider substring of different length.
// like substring can be of length 1. Only one char, then its a substring. 0 cuts required.
// len = 2. if both chars same, 0 cut required else 1 cut required.
// len = 3. (abc) need to check recursively (k loop) with placing a cut at position 0 a, bc and 1. ab, c.
let dp;
function main(str) {
  const n = str.length;
  dp = new Array(n);
  for(let i=0; i<n; i++) {
    dp[i] = new Array(n);
    dp[i].fill(0);
  }

  for(let i=0; i<n; i++) {
    for(let j=0; j<n; j++) {
      if (i == j) {
        dp[i][j] = 0; // single/same element. 0 cuts already palendrome.
      }
     }
  }

  for(let len=2; len<=n; len++) { // This is the n for length of string given
    // for s substring of len L, set different
    // possible starting indexes
    for(let i=0; i <=n - len; i++) {
      // Suppose we take substring of length 2.
      // String HELLO (indexes 0,1,2,3,4)
      // Substrings are(i,j) HE(0,1), EL(1,2), LL(2,3), LO(3,4) len = 2.
      // total length = 5.
      // Max value of i can be = 5 - 2 = 3. ie index 3.
      // Max value of j when i is max at 3. i + len - 1 = 3 + 2 - 1 = 4. index 4.
      // set the ending index j
      let j = i + len - 1;
      // for length L = 2, will just compare two corner chars
      if (len == 2) {
        dp[i][j] = (str[i] === str[j] ? 0 : 1);
      } else {
        if (isPalendrome(str, i, j)) {
          // check if the str is palendrome or not
          dp[i][j] = 0; // if palendrome, no cut required.
        } else {
          // Make a cut at every possible possible
          // location starting from i to j-1.
          // We need two partings right. (1, k) and (k+1, j)
          // So max k = j-1 or less than j.
          // and get the minimum cuts required
          dp[i][j] = Number.POSITIVE_INFINITY;
          for(let k=i; k<j; k++) {
            let part1 = dp[i][k];
            let part2 = dp[k+1][j];
            let tempAns = 1 + (part1 + part2);
            dp[i][j] = Math.min(dp[i][j], tempAns);
          }
        }
      }
    }
  }
  return dp[0][n-1];  // need value at complete string which is from index 0-n-1
}

function isPalendrome(str, i, j) {
  // i and j are start and end index
  if (i >=0 && j >=0) {
    while(i<=j) {
      if(str[i] == str[j]) {
        i++;
        j--;
      } else {
        return false;
      }
    }
    return true;
  }
  return false;
}
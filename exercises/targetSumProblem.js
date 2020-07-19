
// targetSumProblem.js
// LEETCODE problem.
// Given an array, you need to assign sign to each element
// of array like + or -
// Such that the sum of the array is 1 or given sum.
// and count how many possible ways are there to do this.

// Let us take an array [1,1,2,3]
// now if we assign signs like +1, -1, -2, +3 = Sum is 1
// again +1, -2, -1, +3 = Sum 1
// So actually we making two subsets like
// [1,3] and [-2,-1] ... So add them means
// [1,3] - [2,1] (taking minus common outside.)
// This is basically subset will given difference 1.
// Asked with different words.
// So problem reduced to find the count of subset with given
// difference.
// S1 + S2 = S
// S1 - S2 = diff (1) here.
// 2S1 = S + diff
// S1 = (S + diff)/2
// Therefore find number of subsets that can be made with S1
// equal to (S + diff)/2.

// Check countSubsetsWithGivenDiff.js
function countSubsetsWithGivenDiff(arr, n, diff) {
  const sumOfArray = arr.reduce((el, init) => el+init);
  const sumOfArrayEl = (sumOfArray + diff)/2;
  // In integer array sum is integer hence we can proceed
  // but if sum comes to float we cannot calculate.
  // as our weight array is of integers not float.
  // Question with float will not be there.
  if (sumOfArrayEl % 1 !== 0) {
    return 0; // check if number is float.
  }
  // Let us fill the matrix with range 0 - sumOfArray
  // check what possible subset sums are possible.
  // [n+1][S+1]
  let dp = new Array(n+1);
  for(let i = 0; i < n+1; i++) {
    dp[i] = new Array(sumOfArrayEl+1);
    dp[i].fill(0);
  }

  // Initialization of first row/column
  for(let i = 0; i < n+1; i++) {
    for(let j=0; j<sumOfArrayEl+1; j++) {
      if (i==0 && j==0) {
        dp[i][j] = 1; // Null set
      } else if (i == 0) {
        dp[i][j] = 0;
      } else if (j == 0) {
        dp[i][j] = 1; // Null set
      }
    }
  }

  // Choice Diagram
  for(let i=1; i<n+1; i++) {
    for(let j=1; j<sumOfArrayEl+1; j++) {
      if (arr[i-1] <= j) { // Remember <=
        const ch1 = dp[i-1][j-arr[i-1]];
        const ch2 = dp[i-1][j];
        dp[i][j] = ch1 + ch2; // We want count from both choices.
      } else {
        dp[i][j] = dp[i-1][j];
      }
    }
  }

  return dp[n][sumOfArrayEl];
}

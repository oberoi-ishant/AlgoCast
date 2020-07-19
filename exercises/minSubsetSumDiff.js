
// Given an array. Find the min subset sum difference.
// i.e Find the subsets sum that have the min difference.

// So if two subsets S1 and S2, then S1-S2 = min. (absolute value)
// Now we know if we know total sum if array = S.
// Therefor S1 + S2 = S
// Now lets solve the two equations.
// S1 + S2 = S
// S1 - S2 = diff
// So, S1 + S2 + S1 - S2 = S + diff
// So, 2S1 = S + diff
// diff = 2S1 - S

// Now consider an array [1,3,5]
// Total Sum = 9
// Possible sum values of subsets
// [1] = 1, [3] = 3, [5] = 5, [1,3] = 4,
// [1,5] = 6, [3,5] = 8, [] = 0, [1,3,5] = 9
// So range of Sum is 0 t0 7
// But note, not all values are possible in the range 0 - 9
// Like we do not have subest sum equal to 2 and 7.
// Now if subset sum are equal then from diff = 2S1 - S
// diff = 2S1 - S, diff will be 0.
// if we have a number line depicting sum of subsets from the
// array from 0 - 9
// We know S1 + S2 = S
// So if we take any one S1, like [3] = 3, we know 9 - 3= 6,
// So 6 should also be on the number line. as S1 + S2 = 9
// That means we know S1 and Sum then S2, can be found using
// S - S1.
// Also, when S1 = S2, S1 - S2 = 0
// So in this number line we will consider the mid point
// like say 5.
// If we take S1 values in diff = 2S1 - S, greater than 5
// then we know diff will become negative.
// So will take value from 0 - mid point for S1.
// S0, (diff + S)/2 = S1.
// Therefore, question reduces to first find all possible
// S1 values from range 0 to (diff + S)/2.
// Now will can use knapsack to fill the top-down matrix
// wto find a subset in array with value 0 t0 (diff + S)/2.
// Now to get this diff minimum. We will see the last row
// of our matrix. It will have all possible values of S1.
// To get diff minimum diff = 2S1 - S, S1 should be maximum.
// We will iterate frmo middle for last row to 0, to keep
// 2S1 - S as positive. Coz remeber we are taking S1 assuming
// S1 - S2 = difference (min positive value).
// Will now take this last row of matrix and iterate over it
// and find the maximum value of S1 possible and then calcuate
// diff.


function minSubsetSumDiff(arr, n) {
  const sumOfArrayEl = arr.reduce((el, init) => el+init);
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
        dp[i][j] = true; // Null set
      } else if (i ==0) {
        dp[i][j] = false;
      } else if (j == 0) {
        dp[i][j] = true; // Null set
      }
    }
  }

  // Choice Diagram
  for(let i=1; i<n+1; i++) {
    for(let j=1; j<sumOfArrayEl+1; j++) {
      if (arr[i-1] <= j) { // Remember <=
        const ch1 = dp[i-1][j-arr[i-1]];
        const ch2 = dp[i-1][j];
        dp[i][j] = ch1 || ch2; // OR
      } else {
        dp[i][j] = dp[i-1][j];
      }
    }
  }

  // Now last row of matrix is possible values of subset sum
  // with true.
  // So to minimise diff we will start from the middle for the
  // second row upto 0, and find diff.
  // Obviously more the S less the diff. diff = 2S1 - S, S1.
  const midpoint = sumOfArrayEl/2;
  const midpointInt = parseInt(midpoint);
  // Weight array/Sum array
  const sumArray = [...(new Array(sumOfArrayEl+1).keys())]
  let diff = -1;
  for (let i= midpointInt + 1; i > 0; i--) {
    if (dp[n][i] == true) {
      // diff = 2S1 - S
      diff = 2 * sumArray[i] - sumOfArrayEl;
      break;
    }
  }
  return diff;
}

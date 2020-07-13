
// Remember when we are given only one array (unlike two in Knapsak weight, value)
// we will consider the given array as a Knapsack weight array.
// Variation of Knapsack
// Subset sum problem.
// Input: arr [2,3,7,8,10]
// Output: 11
// Check if there exists a subset that has sum equal to 11.
// Since question is asking if there exists, we need to
// answer in yes|no or true|false.

// length of array: n
function subsetSum(arr, sum, n) {
  if(n == 0 && sum == 0) {
    // no element no sum ... empty array is subset possible.
    // True
    return true;
  } else if(n == 0) {
    // for no element and sum > 0, no subset possible.
    // False.
    return false;
  } else if (sum == 0) {
    // for sum = 0, any number of elements, doesn't matter.
    // empty array is possible subset. True.
    return true;
  }

  if(arr[n-1] > sum) {
    return subsetSum(arr, sum, n-1);
  }

  if (arr[n-1] <= sum) {
    return subsetSum(arr, sum - arr[n-1], n-1) || subsetSum(arr, sum, n-1);
  }
}


// Now will do it with iterative approach.
// Varying things here are...
// n - no of elements in array that can be considered.
// sum - that can vary with each iteration as in recursion.

// create a 2D array of [arr.length+1][sum+1] to denote subproblems.
function subsetSum(arr, sum, n) {
  // Create a matrix of [n+1][sum+1]
  var dp = new Array(n+1);
  for(let i=0; i<dp.length; i++) {
    dp[i] = new Array(sum+1);
    dp[i].fill(-1);
  }

  // Initialization of base condition.
  for(let i=0; i<n+1; i++) {
    for(let j=0; j<sum+1; j++) {
      if (i==0 && j==0) {
        dp[i][j] = true;
      } else if (i==0) {
        dp[i][j] = false;
      } else if (j==0) {
        dp[i][j] = true;
      }
    }
  }

  // Filling the choice diagram.
  // Start from index 1 as 0th is considered in base condition.
  for(let i=1; i<n+1; i++) {
    for(let j=1; j<sum+1; j++) {
      if (arr[i-1] > j) {
        dp[i][j] = dp[i-1][j];
      } else {
        // Choice1. Include this element.
        // So new sum is sum-arr[j]
        const ch1 = dp[i-1][j-arr[i-1]];
        // Don't include this element.
        // sum ie j is unchanged.
        const ch2 = dp[i-1][j];
        dp[i][j] = ch1 || ch2; // Return that choice which return True.
      }
    }
  }
  return dp[n][sum];
}
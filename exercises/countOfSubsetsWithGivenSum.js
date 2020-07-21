
// Question: countOfSubsetsWithGivenSum
// For a given array, COUNT the number of subsets
// that have a given SUM.

// Input: arr[2,3,5,6,8,10] // All positive integers only.
// Sum: 10
// Output: 3. [2,3,5] [2,8] [10]
// But here assuming there is no number ZERO in the array.

// For zeros in the array, you can first count the number of
// in the array, remove them from the array.
// them multiply the result with 2 power no. of zeros.
// as very subset has option to include or exlcude zeros.
// Try recursive way

function checkForZeros(arr, sum, n) {
  let numberOfZeros = 0;
  while(arr.lastIndexOf(0) != -1) {
    let ind = arr.lastIndexOf(0);
    numberOfZeros++;
    arr.splice(ind, 1);
  }
  // Now new n will be n-numberOfZeros.
  const count = countOfSubsetsWithGivenSum(arr, sum, n-numberOfZeros);
  return count * Math.pow(2, numberOfZeros);
}

function countOfSubsetsWithGivenSum(arr, sum, n) {
  if(sum == 0 && n == 0) {
    return 1; // since we want count.
  } else if (sum == 0) {
    return 1;
  } else if (n == 0) {
    return 0;
  }

  if(arr[n-1] > sum) {
    return countOfSubsetsWithGivenSum(arr, sum, n-1);
  }

  if (arr[n-1] <= sum) {
    // include element
    const ch1 = countOfSubsetsWithGivenSum(arr, sum-arr[n-1], n-1);
    // exclude element
    const ch2 = countOfSubsetsWithGivenSum(arr, sum, n-1);
    // will return the sum of both choices, as we need
    // count of total number of subsets that can be formed
    // from both the paths/choices.
    return ch1 + ch2;
  }
}


// Now iterative approach.
// Create Top Down matrix of [n+1][sum+1]
// Base condition
// choice array
// return [n][sum]
// check for zeros in array.
function checkForZeros(arr, sum, n) {
  let numberOfZeros = 0;
  while(arr.lastIndexOf(0) != -1) {
    let ind = arr.lastIndexOf(0);
    numberOfZeros++;
    arr.splice(ind, 1);
  }
  // Now new n will be n-numberOfZeros.
  const count = countOfSubsetsWithGivenSum(arr, sum, n-numberOfZeros);
  return count * Math.pow(2, numberOfZeros);
}
function countOfSubsetsWithGivenSum(arr, sum, n) {
  // create 2D array
  const dp = new Array(n+1);
  for(let i=0; i<n+1; i++) {
    dp[i] = new Array(sum+1);
    dp[i].fill(0); // since we need count.
  }

  // Base condition.
  for(let i=0; i<n+1; i++) {
    for(let j=0; j<sum+1; j++) {
      if(i==0 && j==0) {
        dp[i][j] = 1; // empty set
      } else if (i==0) {
        dp[i][j] = 0;
      } else if(j==0) {
        dp[i][j] = 1;
      }
    }
  }
  // Choice diagram
  // start from 1. as 0 is base condition.
  for(let i=1; i<n+1; i++) {
    for(let j=1; j<sum+1; j++) {
      if(arr[i-1] > j) {
        dp[i][j] = dp[i-1][j];
      } else {
        // include
        const ch1 = dp[i-1][j-arr[i-1]];
        // exclude
        const ch2 = dp[i-1][j];
        // we want total count from both the paths/choices.
        dp[i][j] = ch1 + ch2;
      }
    }
  }
  // the last element of the 2-D matrix.
  return dp[n][sum];
}

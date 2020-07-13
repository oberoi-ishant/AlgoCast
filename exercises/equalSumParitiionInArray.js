// Equal Sum Partition In Array.
// Given an array can we partitition it
// into two subsets with equal sum.

// Example: arr = [1,5,11,5]
// Output True. [1,5,5] [11]

// Catch: We can only partition a number into two
// equal parts if it is EVEN.
// Hence sum of the array elements should be EVEN.

// Now we need to check if there is a subset which has
// a sum of sum/2.
// Coz we can have a even sum array like [2, 10] SUM 12.
// But we cannot partition it into two equal sum halves.

// Summarize.
// Step 1. Check if Array sum if EVEN.
// Step 2. Find a subset with sum/2. SubsetSumArray Problem
// done earlier.

function equalSumPartition(arr) {
  // first let us get sum of array elements.
  const sum = arr.reduce((elem, initVal) => elem+initVal);
  const isSumEven = sum % 2 == 0;

  if (isSumEven) {
    // Call the subsetSum problem, with sum = SUM/2
    // If it returns true.
    // Answer is TRUE.
    const newSum = sum/2;
    const isSubsetPossible = subsetSum(arr, newSum, arr.length);
    if (isSubsetPossible) {
      return true;
    }
  }
  return false;
}

// check subsetSumProb_Knapsack.js
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
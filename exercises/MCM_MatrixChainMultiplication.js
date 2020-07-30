// https://www.youtube.com/watch?v=kMK148J9qEE&list=PL_z_8CaSLPWekqhdCPmFohncHwz8TY2Go&index=34
// https://www.geeksforgeeks.org/matrix-chain-multiplication-dp-8/
// Given an array p[] which represents the chain of matrices such that
// the ith matrix Ai is of dimension p[i-1] x p[i].
// We need to write a function MatrixChainOrder() that should return
// the minimum number of multiplications needed to multiply the chain.
// Input: p[] = {40, 20, 30, 10, 30}
// Output: 26000
// There are 4 matrices of dimensions 40x20, 20x30, 30x10 and 10x30.
// Let the input 4 matrices be A, B, C and D.  The minimum number of
// multiplications are obtained by putting parenthesis in following way
// (A(BC))D --> 20*30*10 + 40*20*10 + 40*10*30

// Input: p[] = {10, 20, 30, 40, 30}
// Output: 30000
// There are 4 matrices of dimensions 10x20, 20x30, 30x40 and 40x30.
// Let the input 4 matrices be A, B, C and D.  The minimum number of
// multiplications are obtained by putting parenthesis in following way
// ((AB)C)D --> 10*20*30 + 10*30*40 + 10*40*30

// Input: p[] = {10, 20, 30}
// Output: 6000
// There are only two matrices of dimensions 10x20 and 20x30. So there
// is only one way to multiply the matrices, cost of which is 10*20*30

// For a matrix A[aXb] B[bXc], they can be multiplied only if
// b==c. Result matrix dimensions aXc.
// Cost of multiplication: a*b*c.


// Steps
// 1. Find the correct value of i, j
// 2. Write the base condition.
// 3. find the k loop scheme.
// 4. find answer from temporary answers.

// Lets do the recursive approach.

function MatrixChainMultiply(A) {
  const n = A.length;
  return MCM(A, 1, n-1);
}
function MCM(A, i, j) {
    // base condition
    // If we have only one element in array = [40]
    // we cannot calculate dimensions of array
    // as it is i[i-1]*[i]
    // therefore, i==j is also not valid input.
    if (i==j) {
      return 0;
    }
    let min = Number.POSITIVE_INFINITY;
    for(let k = i; k<j; k++) {
      // for every value of k, i should be able to calculate matrix
      // size, A[k-1]*A[k]
      const ch1 = MCM(A, i, k);
      const ch2 = MCM(A, k+1, j);
      let tempAns = ch1 + ch2 + A[i-1]*A[k]*A[j];
      if (min > tempAns) {
        min = tempAns;
      }
    }
    return min;
}


// Memoization | Bottom Up DP.

let dp;
function MatrixChainMultiply(A) {
  const n = A.length;
  dp = new Array(n);
  for(let i=0; i<n;  i++) {
    dp[i] = new Array(n);
    dp[i].fill(-1);
  }
  return MCM(A, 1, n-1);
}
function MCM(A, i, j) {
    // base condition
    if (i==j) {
      return 0;
    }
    if(dp[i][j] !== -1) {
      return dp[i][j];
    }
    let min = Number.POSITIVE_INFINITY;
    for(let k = i; k<j; k++) {
      const ch1 = MCM(A, i, k);
      const ch2 = MCM(A, k+1, j);
      let tempAns = ch1 + ch2 + A[i-1]*A[k]*A[j];
      if (min > tempAns) {
        min = tempAns;
      }
    }
    dp[i][j] = min;
    return dp[i][j];
}
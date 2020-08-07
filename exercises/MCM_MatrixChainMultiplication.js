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

// Top Down
// Also check palendromic partitions.
// There is good difference between dp initialization.
// https://www.geeksforgeeks.org/matrix-chain-multiplication-dp-8/
// https://www.youtube.com/watch?v=vgLJZMUfnsU
// We can consider this multiplication like a string
// ABCD... (A)((BC)D) or (A)(B(CD)) or (AB)(CD) or (A(BC))(D) ...
// Will use input matrix to calculate dimensions of matrix.
// So for first matrix will need i = 1, to get dimensions.
// Input: p[] = {10, 20, 30, 40, 30}
// Input arr[i-1]*arr[i] ie. arr[0]*arr[1] = 10 X 20
// Steps:
// 1. Enter base condition values in dp.
// 2. Start for substring with length 2 to < n (length loop)
// 3. Start i loop.
// 4. Calculate value of j.
// 5. Start k loop.
// 6. Calculate temp answers. Cost of [i,j][k+1,j] + cost of multiplying (AB)(CD) for example.
// 7. which (AB)(CD) is like str[i-1] * str[k] * str[j].
// 8. Calculate dp[i][j]
// Image: MCM_Top_Down_DP.jpg in question-images folder
let dp;
function main(str) {
  const n = str.length;
  dp = new Array(n);
  for(let i=1; i<n; i++) {
    // Starting from 1.
    // As we are considering arrays like ABC ...
    // But actual input is an array to calculate dimenions.
    // No of arrays from input array = n - 1;
    dp[i] = new Array(n);
    dp[i].fill(0);
  }

  for(let i=1; i<n; i++) {
    for(let j=1; j<n; j++) {
      if (i == j) {
        dp[i][j] = 0; // Cost is 0 for a single matrix. So (0,0) (1,1) (2,2) (3,3) etc have 0 cost
      }
    }
  }

  for(let len=2; len<n; len++) {
    // Here less than n, as no of matrix is n - 1. So last matrix
    // in dp will be at index n - 1. ABCD ... So D will be at index n - 1.
    // for s substring of len L, set different
    // possible starting indexes
    // Starting i from 1. As input is of dimensions to calculate array dimensions.
    // First array dimensions are possible if i = 1 in input array. [i-1][i]
    // This also means we are expecting entire array srting ABC.. to be at first row.
    // So answer will be in matrix at [1][n-1] and not [0][n-1].
    // As in palendromin partitions. Coz in palendromic partitions we get the normal thing
    // ie first char of string at index 0. Here to compute first array we have to start from 1.
    for(let i=1; i <= n - len; i++) { // Staring i = 1, as to get first matrix dimenions we need [i-1]X[i]
      // set the ending index j
      let j = i + len - 1;
      dp[i][j] = Number.POSITIVE_INFINITY;
      for(let k=i; k<j; k++) { // k < j as we need to partition. on i,k and k+1,j
        const part1 = dp[i][k];
        const part2 = dp[k+1][j];
        let tempCost = part1 + part2 + str[i-1] * str[k] * str[j];
        dp[i][j] = Math.min(dp[i][j], tempCost);
      }
    }
  }
  return dp[1][n-1]; // NOTE: answer at [1][n-1].
}
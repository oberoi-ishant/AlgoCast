
// Coin Change Problem
// Given an array of coins with some denominations.
// There is unlimited supply of coins.
// Use this array to compute the given value.
// And how many such ways are possible. Max number of ways.
// Input: coin [1,2,3]
// Value: 5

// So here we see we can reuse coins as we have them in plenty.
// So this is UNBOUNDED Knapsack.

// Weight array = 0 to 5
// n array = [1,2,3]

// So this is count of subset sum problem.

// Recursive way
function coinChange(coin, S, n) {
  // initialization
  if (n==0 && S==0) {
    return 1; // Yes empty set possible. One way
  } else if (n==0) {
    return 0; // No coins no way to make a S > 0
  } else if (S==0) {
    return 1; // Since sum is zero, do not select any coin. Possible.
  }


  if (coin[n-1] > S) {
    return coinChange(coin, S, n-1);
  }

  if (coin[n-1] <= S) {
    // take this coin
    const ch1 = coinChange(coin, S-coin[n-1], n);
    // exlcude coin
    const ch2 = coinChange(coin, S, n-1);
    return ch1+ch2;
  }
}

// Iterative way
function coinChange(coin, sum, n) {
  // initialise array [n+1][Sum+1]
  let dp = new Array(n+1);
  for(let i=0; i<n+1; i++) {
    dp[i] = new Array(sum+1);
    dp[i].fill(0);
  }

  // Base Condition
  for(let i=0; i<n+1; i++) {
    for(let j=0; j<sum+1; j++) {
      if(i==0 && j==0) {
        dp[i][j] = 1; // Empty set for Sum 0
      } else if(i==0) {
        dp[i][j] = 0; // No coins, Sum > 0. Not possible
      } else if(j==0) {
        dp[i][j] = 1; // Select no coin, Sum = 0. Possible.
      }
    }
  }

  // choice diagram
  // Start with 1, 0 covered in initialization
  for(let i=1; i<n+1; i++) {
    for(let j=1; j<sum+1; j++) {
      if(coin[i-1] > j) {
        dp[i][j] = dp[i-1][j]; // Processed. not taking.
      } else {
        // include
        const ch1 = dp[i][j - coin[i-1]]; // Including it. Again can be taken
        const ch2 = dp[i-1][j]; // Processed. not taking.
        dp[i][j] = ch1+ch2;
      }
    }
  }
  return dp[n][sum];
}
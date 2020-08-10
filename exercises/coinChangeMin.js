
// https://www.geeksforgeeks.org/find-minimum-number-of-coins-that-make-a-change/
// https://www.youtube.com/watch?v=I-l6PBeERuc&list=PL_z_8CaSLPWekqhdCPmFohncHwz8TY2Go&index=16
// Given a value V, if we want to make change for V cents,
// and we have infinite supply of each of
// C = { C1, C2, .. , Cm} valued coins,
// what is the minimum number of coins to make the change?
// Example:
// Input: coins[] = {25, 10, 5}, V = 30
// Output: Minimum 2 coins required
// We can use one coin of 25 cents and one of 5 cents

// Input: coins[] = {9, 6, 5, 1}, V = 11
// Output: Minimum 2 coins required
// We can use one coin of 6 cents and 1 coin of 5 cents

let dp;
function main(coin, S) {
  const n = coin.length;
  dp = new Array(n+1);
  for(let i=0; i<n+1; i++) {
    dp[i] = new Array(S+1);
    dp[i].fill(0);
  }

  // Base condition for 0th row and 0th colum
  for(let i=0; i<n+1; i++) {
    for(let j=0; j<S+1; j++) {
      if (i==0 && j==0) {
        // Since we have no coins, we dont know what will they be
        // so infinite possibilities.
        dp[i][j] = Number.POSITIVE_INFINITY;
      } else if(i==0) {
        dp[i][j] = Number.POSITIVE_INFINITY;
      } else if (j==0) {
        dp[i][j] = 0;
      }
    }
  }

  // Unique question that required one more row initialization.
  // Draw matrix and then do.
  // Initializing first row.
  // ie. i = 1
  // so, will take array of size 1
  // coin[0]
  for(let i=1, j=1; j<S+1; j++) {
    // If coins divides the S, like Sum 15, coin 3 == 15/3 = 5 coins needed.
    if (j % coin[0] == 0) {
      dp[i][j] = j/coin[0];
    } else {
      // If division not possible, Infinite.
      dp[i][j] = Number.POSITIVE_INFINITY;
    }
  }

  for(let i=2; i<n+1; i++) {
    for(let j=1; j<S+1; j++) {
      if (coin[i-1] > j) {
        dp[i][j] = dp[i-1][j];
      } else {
        const ch1 = dp[i-1][j];
        const ch2 = 1 + dp[i][j - coin[i-1]];
        dp[i][j] = Math.min(ch1, ch2);
      }
    }
  }

  return dp[n][S];
}

// Recursive
function coinChangeMin(coin, S, n) {
  // Base condition
  if (S==0 && n==0) {
    return Number.POSITIVE_INFINITY;
  } else if (S==0) {
    return 0;
  } else if (n==0) {
    // Since we have no coins, we dont know what will they be
    // so infinite possibilities.
    return Number.POSITIVE_INFINITY;
  }

  if (coin[n-1] > S) {
    return coinChangeMin(coin, S, n-1);
  } else {
    // Not considered
    // considered. + 1 as this coin is considered.
    const ch1 = coinChangeMin(coin, S, n-1);
    const ch2 = 1 + coinChangeMin(coin, S-coin[n-1], n);
    return Math.min(ch1, ch2);
  }
}


// Recursive
function coinChangeMin(coin, S, n) {
  // Base condition
  if (S==0) {
    return 0;
  }

  let res = Number.POSITIVE_INFINITY;

  for(let i=0; i<m; i++) {
    if(coin[i] <=S) {
      let subResult = 1 + coinChangeMin(coin, S-coin[m], n);
      res = Math.min(subResult, res);
    }
  }
  return res;
}

// OR from GeeksForGeeks
// https://www.geeksforgeeks.org/find-minimum-number-of-coins-that-make-a-change/
function coinChangeMin(coin, S, n) {
  // Base condition
  if (S==0) {
    return 0;
  }

  let res = Number.POSITIVE_INFINITY;

  for(let i=0; i<n; i++) {
    if(coin[i] <=S) {
      let subResult = coinChangeMin(coin, S-coin[i], n);
      if (subResult != Number.POSITIVE_INFINITY && subResult + 1 < res) {
        res = subResult + 1;
      }
    }
  }
  return res;
}
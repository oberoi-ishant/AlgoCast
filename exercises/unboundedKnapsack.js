// Unbounded Knapsack
// Is a problem where we can consider one item to add in
// knapsack multiple times.
// Unlike 0-1 knapsack where once we add/exclude an item that
// item is considered processed.
// Here the change is
// If item is not to be considered, we mark it processed.
// Won't consider it again.
// But if we add an item, we can add it again and again.
// Example: if i do not like ice-cream i will not eat how
// many times asked. (processed)
// If i like pizza i can eat it again and again.

// Input:
// value[] = [60, 100, 120]
// weight[] = [10, 20, 30]
// W = 50 knapsack weight capacity

// Recursive
function unboundedKnapsack(val, wt, W, n) {
  // base condition
  // smalled valid input
  if (n ==0 | W ==0) {
    return 0;
  }

  if (wt[n-1] > W) {
    return unboundedKnapsack(val, wt, W, n-1);
  }

  if (wt[n-1] <= W) {
    // Including the item.
    // So we can include again also.
    // Next recursive call n and NOT n-1
    const ch1 = val[n-1] + unboundedKnapsack(val, wt, W - wt[n-1], n);
    // Excluding item. So consider processed.
    // Next recursive call is n-1;
    const ch2 = unboundedKnapsack(val, wt, W, n-1);
    return Math.max(ch1, ch2);
  }
}


// Iterative
function unboundedKnapsack(val, wt, W, n) {
  var dp = new Array(n+1);
  for(let i=0; i<n+1; i++) {
    dp[i] = new Array(W+1);
    dp[i].fill(-1);
  }

  for(let i=0; i<n+1; i++) {
    for(let j=0; j< W+1; j++) {
      if (i==0||j==0) {
        dp[i][j] = 0; // Base condition.
        //Value is 0 is nothing is added as capacity is zero or there is no item to add.
      }
    }
  }

  for(let i=1; i<n+1; i++) {// note starting for 1 as 0 is done in initialization.
    for(let j=1; j<W+1; j++) {
      if (wt[i-1] <=  j) {
        // Including the item.
        // So we can include again also.
        // Next recursive call i and NOT i-1
        const val1 = val[i-1] + dp[i][j-wt[i-1]];
        // Excluding item. So consider processed.
        // Next recursive call is i-1;
        const val2 = dp[i-1][j];
        dp[i][j] = Math.max(val1, val2);
      } else {
        // Excluding item. So consider processed.
        // Next recursive call is i-1;
        dp[i][j] = dp[i-1][j]
      }
    }
  }
  return dp[n][W];
}
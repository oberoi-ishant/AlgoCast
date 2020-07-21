
// rodCuttingProblem.js
// Given a rod of fixed length.
// Also given value of smaller lenghts of the rod.
// Cut the rod in the manner as to maximise price.

// Input:
// total length: 8
// rod length [1,2,3,4,5,6,7,8]
// Price      [1,5,8,9,10,17,17,20] This is generally in 1:1
// accordance to lenght array.
// Means 1 unit of length costs 1
// 2 units cost 5
// 3 unit cost 8 etc

// Solution
// So this is knapsack as we have a choice to cut it in 1m or not
// 2m or not etc
// Also we are asked maximum price ... so optimal thing asked.
// Now, here Price is Knapsack Value array
// length is Knapsack n
// total length 8 is knapsack capacity.
// Note: we can cut here any number of pieces of same length.
// Like we can cut 4 pieces of length 1.
// So this is UNBOUND Knapsack.


// Recursive
function rodCutting(price, length, L, n) {
  // base condition
  // smalled valid input
  if (n ==0 | L ==0) {
    return 0;
  }

  if (length[n-1] > L) {
    return rodCutting(price, wt, L, n-1);
  }

  if (length[n-1] <= L) {
    // Including the item.
    // So we can include again also.
    // Next recursive call n and NOT n-1
    const ch1 = price[n-1] + rodCutting(price, length, L - wt[n-1], n);
    // Excluding item. So consider processed.
    // Next recursive call is n-1;
    const ch2 = rodCutting(price, length, L, n-1);
    return Math.max(ch1, ch2);
  }
}

// Iterative
function unboundedKnapsack(price, wt, W, n) {
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
        const val1 = price[i-1] + dp[i][j-wt[i-1]];
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
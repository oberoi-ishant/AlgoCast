// https://www.youtube.com/watch?v=nqowUJzG-iM&list=PL_z_8CaSLPWekqhdCPmFohncHwz8TY2Go
// Dynamic Programmig by Aditya Verma. Youtube.
// You can also check https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/
// 0-1 Knapsack
// Given weights and values of n items, put these items
// in a knapsack of capacity W to get the maximum total
// value in the knapsack.
// In other words, given two integer
// arrays val[0..n-1] and wt[0..n-1] which represent values
// and weights associated with n items respectively.
// Also given an integer W which represents knapsack capacity,
// find out the maximum value subset of val[] such that sum of
// the weights of this subset is smaller than or equal to W.
// You cannot break an item,
// either pick the complete item or don’t pick it (0-1 property).

// Input:
// value[] = [60, 100, 120]
// weight[] = [10, 20, 30]
// W = 50 knapsack weight capacity


// Lets try recursive approach.
// Will take every nth element and check
// 1. if the el weight > W; we can't add it to sack.
// so call func again with new params (n-1), elem is considered.
// 2. if el weight <= W, we have two options
// First: Add the element to sack, and call function with new params
// (n-1), new weight to be filled W-wt[el]
// Second: exclude element: call func witn new params
// (n-1) as elem is considered, W no change in W to be filled.
// The result of this iteration where wt[el] <= W we will take
// max of the two options include and exclude ...and call func again.
// If we add elem to sack store that element value and return it
// with next call.

// Recursiver Solution:

function knapsack(val, wt, W, n) {
  // writig base case
  // if W = 0, then we can't add any item to sack
  // so return 0
  // Similarly if we do not have any item n = 0,
  // then we can't put anythin in sack, still return
  // value is 0.
  if ( W == 0 || n == 0) {
    return 0;
  }

  // Now check what is the weight of the element.
  if (wt[n-1] > W) { // check wait of last element, lenght n = 3, so last index is n-1
    // We can't add it to the sack so continue iteration
    return knapsack(val, wt, W, n-1);
  }

  if (wt[n-1] <= W) {
    // Now we have two choices,
    // either Add elem to sack or skip this element and
    // move ahead
    return Math.max(val[n-1] + knapsack(val, wt, W-wt[n-1], n-1), knapsack(val, wt, W, n-1));
    // here above knapsack(val, wt, W-wt[n-1], n-1), calling knapsack again with n-1 means
    // we are decreasing the input as we have considered one element, now next call is with
    // one less element.
    // wt[n-1] is the weight of our last element, since we supply n = 3, which is lenght of
    // weight array, actual index of last element in array is n-1.
    // don't confuse b/w W-wt[n-1], n-1 ... here n - 1 have different meaning.
  }
}
// You can call it with knapsack([60, 100, 120], [10,20,30], 50, 3)






// Now with Memoization:/ Bottom Up Approach
// Create a global dp function to store intermediate results;
// creating the array with contstrainsts n = no. of items + 1
// Weight + 1 to get a matrix with 0 - n and 0 - W

let dp = new Array(3+1); // n+1
// should be greate than 'n', you can use contrainsts in
//question. like 1<=N<=10
// W = 50
for(let i = 0; i < dp.length; i++) {
  dp[i] = new Array(50+1);
  dp[i].fill(-1);
}
function knapsack(val, wt, W, n) {
  // writig base case
  // if W = 0, then we can't add any item to sack
  // so return 0
  // Similarly if we do not have any item n = 0,
  // then we can't put anythin in sack, still return
  // value is 0.
  if ( W == 0 || n == 0) {
    return 0;
  }
  // Memoization
  if(dp[n][W] != -1) {
    return dp[n][W];
  }
  // Now check what is the weight of the element.
  if (wt[n-1] > W) {
    // We can't add it to the sack so continue iteration
    dp[n][W] = knapsack(val, wt, W, n-1);
    return dp[n][W];
  }

  if (wt[n-1] <= W) {
    // Now we have two choices,
    // either Add elem to sack or skip this element and
    // move ahead
    // Memoization, store result and then return.
    dp[n][W] = Math.max(val[n-1] + knapsack(val, wt, W-wt[n-1], n-1), knapsack(val, wt, W, n-1));
    // here above knapsack(val, wt, W-wt[n-1], n-1), calling knapsack again with n-1 means
    // we are decreasing the input as we have considered one element, now next call is with
    // one less element.
    // wt[n-1] is the weight of our last element, since we supply n = 3, which is lenght of
    // weight array, actual index of last element in array is n-1.
    // don't confuse b/w W-wt[n-1], n-1 ... here n - 1 have different meaning.
    return dp[n][W];
  }
}


// Since here in recursive solution we saw n(items number) and W(weight/capacity)
// is varying we will make Top-Down MAtrix with these two variables.
// Image: knapsack-top-down-matrix.jpg
// Iterative way
// Using Top-Down Approach.
// First do the initialization.
// Then convert the choice diagram to condition
// as done in recursive solution.
// run the loop for W and n as i, j
// At the end return A[W][n] -- the last block in the
// Top down array is the result.
// Always keep in mind this top-down approach is basically building
// sub problems and major problems matrix.
// so if we have lenght as n = 3, we will see it as three elements 1,2,3.
// now with base condition or initialization will add 0 to the matrix.
// so will have rows like 0,1,2,3 means if we have 0element, 1element, 2elements and 3elements.
// so to have last index in matrix as 3, will create a matrix of n+1 = 4.
// now will have 0-3.
// this is like saying, suppose we have 1element in subproblem oe 2elements or 3elements.
// Same for weight. hence we create matrix of n+1, W+1.
// not the bottom most right element will be [n][W]. This is what is our problem
// statement. So our result will be at [n][W].
function knapsack(val, wt, W, n) {
  // Initalization as base condition
  // Since Top Down matrix is required from 0 - W and
  // 0 - n, We will run loop till W+1 and n+1.
  // the first row and first column will be base condition
  // When either W is 0 or n is 0.
  // i is for items
  // j is for Weight of sack(capacity)

  // First create the Array for Top Down Approach.
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

  // Now fill the matrix for the rest of the iterations
  // Basically new we consider choice diagram
  for(let i=1; i<n+1; i++) {// note starting for 1 as 0 is done in initialization.
    for(let j=1; j<W+1; j++) {
      if (wt[i-1] <=  j) {
        // Here value is [i][j] is calculated from previous value.
        // This is similar from the recursive solution. So
        // always make sure you know the recursive solution.

        //Basically in recursive equiation, replace n with i, and W with j.
        const val1 = val[i-1] + dp[i-1][j-wt[i-1]];
        // When we include this item.
        // So i-1, element is considered. j-wt[i-1], weight is included.
        const val2 = dp[i-1][j];
        // i-1, element is considered.
        // j as Weight is not included.
        // When we exlude this item.
        dp[i][j] = Math.max(val1, val2); // Get Max value as asked in question.
        // See here we say val[i-1] + dp[][], means we are returning values as asked in question.
        // And will get the Max values as asked in question.
      } else {
        dp[i][j] = dp[i-1][j]
      }
    }
  }
  return dp[n][W];
  // Our answer is the last elemenyt in Matrix.
  // Rest are sub problems, solved, hence overrallping subproblems.
}
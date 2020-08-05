// https://www.youtube.com/watch?v=S49zeUjeUL0&list=PL_z_8CaSLPWekqhdCPmFohncHwz8TY2Go&index=43
// Problem statement:
// You are given N floor and K eggs.
// You have to minimize the number of times you have to drop the eggs to find
// the critical floor where critical floor means the floor beyond which eggs start to break.
// Assumptions of the problem:

// If egg breaks at ith floor then it also breaks at all greater floors.
// If egg does not break at ith floor then it does not break at all lower floors.
// Unbroken egg can be used again.
// Note: You have to find minimum trials required to find the
// critical floor not the critical floor.

// Will make it similar to MCM approach.
// Will start at every floor.
// Logically speaking if we had just one egg, we would start from floor one, then floor 2 ...
// Here in the worst case we will have n tries. n is the total number of floors.
// So, in our question here, we have to minimise the number of trials in the worst case.

// The solution is correct, but does not output at higher values
// like eggDrop(4,50). Time limit exceeds.
// Hence people have suggested to use binary search in place of
// for loop to get values of k.

function eggDrop(e, f) {
  // Base condition
  if (f == 0 || f == 1){
    return f; // if f == 0, return 0 ie we can't find. if f==1, then only 1 attempt possible. return 1;
  }

  if (e == 1) {
    return f; // Worst case, it will break from the top floor. So f tries.
  }

  let min = Number.POSITIVE_INFINITY;
  // K loop scheme. K can be from 1 to f.
  for (let k = 1; k <= f; k++) {
    // egg will break or nor break
    // If it breaks at kth floor, it will break at above floors too.
    // so we need to check for 1 to k-1 floors. With one egg less now.
    const caseBreaks = eggDrop(e-1, k-1);
    // if egg does not break, e = e.
    // So egg will not break at floors below k. So we need to check the upper floors
    // to check critical floor. f-k.
    const caseNotBreak = eggDrop(e, f-k);
    const tempAnswerForThisK = 1 + Math.max(caseBreaks, caseNotBreak);
    // Adding 1 as this is also one attempt counted.
    min = Math.min(min, tempAnswerForThisK);
  }
  return min;
}

// https://www.youtube.com/watch?v=o_AJ3VWQMzA
// https://www.youtube.com/watch?v=KVfxgpI3Tv0
// This for DP Top Down table.
// Top Down Approach
// This works for all cases. No Time Limit Exceeded.(TLE)

let floorEgg;
function main(f, e) {
  floorEgg = new Array(f+1);
  for(let i = 0; i<f+1; i++) {
    floorEgg[i] = new Array(e+1);
    floorEgg[i].fill(-1);
  }
  return eggDrop(e, f);
}

function eggDrop(e, f) {
  // Base condition
  for(let i=0; i<f+1; i++) {
    floorEgg[i][1] = i;
    // if only one egg, then max attempts equal to no. of floors.
  }

  for(let i=0; i<e+1; i++) {
    floorEgg[1][i] = 1; // if only one floor, only 1 attempt.
  }

  for(let i=2; i<f+1; i++) {
    for(let j=2; j<e+1; j++) {
      floorEgg[i][j] = Number.POSITIVE_INFINITY;
      for(let k=1; k<i; k++) {
        const brokenResult = floorEgg[k-1][j-1];
        const unbrokenResult = floorEgg[i-k][j];
        const temp = 1 + Math.max(brokenResult, unbrokenResult);
        floorEgg[i][j] = Math.min(floorEgg[i][j], temp);
      }
    }
  }
  return floorEgg[f][e];
}
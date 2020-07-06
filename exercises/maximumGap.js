// Given an array A of integers, find the maximum of j - i subjected to the constraint of A[i] <= A[j].

// If there is no solution possible, return -1.
// Example:
// A : [3 5 4 2]

// Output : 2
// for the pair (3, 4)

function maximumGap(A) {
  var resGap = -1;
  for (var i = 0; i < A.length; i++) {
    for (var j = i; j < A.length; j++) {
      if (A[i] <= A[j]) {
        resGap = resGap > j - i ? resGap : j - i;
      }
    }
  }
  return resGap;
}

// One loop solution
function maximumGap (A) {
  // consecutive elements means
  // numbers that come in order small -> large
  let sortedA = A.sort((a,b) => a-b);
  let gap = -1;
  while(sortedA.length > 1) {
    let localGap = sortedA[1] - sortedA[0];
    if (localGap > 1) {
      gap = gap < localGap ? localGap : gap;
    }
    sortedA.splice(0, 1);
  }
  return gap;
}

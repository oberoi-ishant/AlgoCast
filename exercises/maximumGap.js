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

// Given a collection of intervals, merge all overlapping intervals.

// For example:

// Given [1,3],[2,6],[8,10],[15,18],

// return [1,6],[8,10],[15,18].

// Make sure the returned intervals are sorted.

// Input [1,3],[2,6],[8,10],[15,18]
// Output [1,6],[8,10],[15,18]
function mergeIntervals (A) {
  var intervals = [A[0]];
  for (var i = 1; i < A.length; i++) {
    var current = intervals[intervals.length - 1];
    var currentLess = current[0];
    var currentGreater = current[1];
    var compare = A[i];
    var less = compare[0];
    var greater = compare[1];
    var tempG = null;
    var tempL = null;
    if (less >= currentLess && less <= currentGreater) {
      if (greater >= currentGreater) {
        tempG = greater;
      } else {
        tempG = currentGreater;
      }
      if (less <= currentLess) {
        tempL = less;
      } else {
        tempL = currentLess;
      }
      intervals.pop();
      intervals.push([tempL, tempG])
    } else {
      intervals.push([less, greater]);
    }
  }
  return intervals;
}

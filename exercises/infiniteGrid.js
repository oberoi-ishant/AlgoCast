//     You are in an infinite 2D grid where you can move in any of the 8 directions :

//  (x,y) to
//     (x+1, y),
//     (x - 1, y),
//     (x, y+1),
//     (x, y-1),
//     (x-1, y-1),
//     (x+1,y+1),
//     (x-1,y+1),
//     (x+1,y-1)
// You are given a sequence of points and the order in which you need to cover the points. Give the minimum number of steps in which you can achieve it. You start from the first point.

// Input :

// Given two integer arrays A and B, where A[i] is x coordinate and B[i] is y coordinate of ith point respectively.
// Output :

// Return an Integer, i.e minimum number of steps.
// Example :

// Input : [(0, 0), (1, 1), (1, 2)]
// Output : 2
// It takes 1 step to move from (0, 0) to (1, 1). It takes one more step to move from (1, 1) to (1, 2).

// This question is intentionally left slightly vague. Clarify the question by trying out a few cases in the “See Expected Output” section.
  // This is when covering all points.
  coverPoints : function(A, B) {
    if (A.length == 0 || B.length == 0) {
        return 0;
    }

    var x = A[0];
    var y = B[0];
    var distance = 0;

    for (var i = 1; i < A.length; i++) {
        var newX = A[i];
        var newY = B[i];
        var max = Math.max(Math.abs(newX - x), Math.abs(newY - y));
        distance += max;
        x = newX;
        y = newY;
    }

    return distance;
  }


  // My Solution shortance distance to reach the destination node. Not necessarly covering
  // all the mentioned points. Solution not confirmed though.
  //  function coverPoints(A, B) {
  //     var distance = 0;
  //     if (A.length == 0) return;
  //     if (B.length == 0) return;
  //     var lastX = A[A.length-1];
  //     var lastY = B[B.length-1];
  //     var diffX = Math.abs(A[0] - lastX);
  //     var diffY = Math.abs(B[0] - lastY);
  //     if (diffX == diffY) {
  //       distance = diffX;
  //       return distance;
  //     }
  //     var minDiff = Math.min(diffX, diffY);
  //     distance += minDiff;
  //     var isMinX = lastX < lastY ? true : false;
  //     if (isMinX) {
  //       distance += Math.abs(lastY - minDiff);
  //     } else {
  //       distance += Math.abs(lastX - minDiff);
  //     }
  //     return distance;
  //   }


// question:Image singleElementInSortedArray
// Input: [1,1,2,2,3]
// Output: 4
// Since we are asked to solve in O(log n) time and O(1) space
// we can't use
// linear search. Hence Divide and Conquer

// Approach: We will find the mid-point
// check if it has a matching pair, either left or right
// now find the side which has odd number of elements after we find the pair for mid
// this odd side is definitely having single element, so change the start/end point
// accordingly.
// continue loop until we reach the single element
function singleElementInSortedArray(A) {
  let left = 0;
  let right = A.length - 1;
  while(left < right) {
    // since total array lenght is odd, last index is even.
    let mid = left + parseInt((right - left)/2);
    let isHavlesEven = (right - mid)%2 === 0;
    // now the pair of mid could be either to left or right.
    if (A[mid] == A[mid + 1]) {
      left = mid + 2;
    } else if (A[mid] ==  A[mid - 1]) {
      // since the pair is to the left, right side is odd number in length
      right = mid - 2;
    } else {
      return A[mid];
    }
  }
  return A[start];
}
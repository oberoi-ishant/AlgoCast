
// question:Image singleElementInSortedArray
// Input: [1,2,2,3,3] [1,1,2,2,3,4,4]
// Output: 4
// Since we are asked to solve in O(log n) time and O(1) space
// we can't use
// linear search. Hence Divide and Conquer

// Approach: We will find the mid-point
// check if it has a matching pair, either left or right
// There are two types here...
// 1)[1,2,2,3,3] When there are even number of two halves around mid point.
// 2)[1,1,2,2,3,4,4] When there are odd number of two halves around mid point.
// So check what if the size is even of half after calcuating mid point.
// Then accordingly set left and right.
// 3rd case, when mid is surrounded by even halves, check if mid is the
// number with no pair.
// Return the last element, that is the single element.
function singleElementInSortedArray(A) {
  let left = 0;
  let right = A.length - 1;
  while(left < right) {
    let mid = left + (right - left)/2;
    if (A[mid] !== A[mid+1] && A[mid] !== A[mid-1]) {
      return A[mid];
    } else if (A[mid] == A[mid+1]) {
      let isEven = (right - mid)%2 === 0;
      if (isEven) {
        left = mid + 2;
      } else {
        right = mid - 1;
      }
    } else {
      let isEven = (right - mid)%2 === 0;
      if (isEven) {
        right = mid - 2;
      } else {
        left = mid + 1;
      }
    }
  }
  return A[left];
}


// [1,1,2,2,3] [1,1,2,2,3,3,4]
// Solution O(log n)
// After finding matching element in mid element.
// check which side of pair is the odd number of elements.
// set left, right according to start from that side.
// Return the last element, that is the single element.
function singleElementInSortedArray(A) {
  let left = 0;
  let right = A.length-1;
  while(left < right) {
    let mid = left + (right - left)/2;
    if (A[mid] !== A[mid+1] && A[mid] !== A[mid-1]) {
      return A[mid];
    } else if (A[mid] == A[mid+1]) {
      // check if you exlude the pair, which side of pair
      // has odd number of elements. That side definitely has
      // single element.
      let isEven = (right - (mid+1))%2 == 0;
      if (isEven) {
        right = mid - 1;
      } else {
        left = mid + 2;
      }
    } else {
      // check if you exlude the pair, which side of pair
      // has odd number of elements. That side definitely has
      // single element.
      let isEven = (left - (mid-1))%2 == 0;
      if (isEven) {
        left = mid + 1;
      } else {
        right = mid - 2;
      }
    }
  }
  return A[left];
}

// [1,1,2,2,3] [1,1,2,2,3,4,4]
// Solution 2: But this is NOT O(logn)
// Check if mid point has no matching element left or right?
// if yes, return mid element.
// else find the match element and remove the pair.
// repeat until array has only one element left.
// return that left element, it is the one with no pair.
function singleElementInSortedArray(A) {
  while(A.length > 1) {
    let left = 0;
    let right = A.length-1;
    let mid = left + (right - left)/2;
    if (A[mid] !== A[mid+1] && A[mid] !== A[mid-1]) {
      return A[mid];
    } else if (A[mid] == A[mid+1]) {
      A.splice(mid, 2);
    } else {
      A.splice(mid-1, 2);
    }
  }
  return A[0];
}

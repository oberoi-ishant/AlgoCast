
// question:Image majorityelement
// Given an array of size n.
// Majority element is the element that
// appeare more than n/2 times.

// Assume: array is non-empty and majority element
// always exists.

// We will solve it using Moore's Voting Algorithm.
// https://www.geeksforgeeks.org/majority-element/
// Approach: This is a two-step process.
// The first step gives the element that maybe the majority element in the array. If there is a majority element in an array, then this step will definitely return majority element, otherwise, it will return candidate for majority element.
// Check if the element obtained from the above step is majority element. This step is necessary as there might be no majority element.
// Step 1: Finding a Candidate
// The algorithm for the first phase that works in O(n) is known as Moore’s Voting Algorithm.
// Basic idea of the algorithm is that if each occurrence of an element
// e can be cancelled with all the other elements that are different
// from e then e will exist till end if it is a majority element.
// Step 2: Check if the element obtained in step 1 is majority element or not.
// Traverse through the array and check if the count of the element found
// is greater than half the size of the array,
// then print the answer else print “No majority element”.
// Example: Input [3,2,3]
// Output: 3
// Example: Input [2,2,1,1,1,2,2]
// Output: 2
// Here since we are guranteed that there is a Majority Element
// we may not need Step 2.
function majorityElement(A) {
  let majority_index = 0;
  let count = 1;
  for(let i = 1; i < A.length; i++) {
    if (A[i] === A[majority_index]) {
      count++;
    } else {
      count--;
    }
    if (count == 0) {
      count = 1;
      majority_index = i;
    }
  }
  return A[majority_index];
}
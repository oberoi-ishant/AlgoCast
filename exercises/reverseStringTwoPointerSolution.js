

// A string is given as an array.
// reverse the string.
// You are not allowed to allocate extra space for another array.
// You should do it with origin array and O(1) of extra memory.
// example Input: ['h', 'e', 'l', 'l', 'o']
// Output: ['o', 'l', 'l', 'e', 'h']

// Approach:
// Use two pointer approach.
// left from index 0
// right from end of array
// swap elements and increment left, decrement right
// repeat until left < right

function reverseString(strArr) {
  let left = 0;
  let right = strArr.length - 1;
  let extrMem = '';
  while(left < right) {
    extrMem = strArr[left];
    strArr[left] = strArr[right];
    strArr[right] = extrMem;
    left++;
    right--;
  }
  return strArr;
}
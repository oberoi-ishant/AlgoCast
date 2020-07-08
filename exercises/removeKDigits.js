// Image: removeKDigits-1/2
// No leading zeros in the number
// Input: '1432219' k = 3
// Output: '1219'

// Input: '10200' k = 1
// Output: 200

// So a number will be smalled when it sorted, like
// in ascender order 123...
// therefore idea is compare two digits,
// if next one is less than current, remove current.
// else if all in ascending, remove last digit.
// so 123 -> 12
function removeKDigits(numStr, k) {
  let numArr = numStr.split('');
  while(k > 0) {
    for(let i = 0; i<numArr.length; i++) {
      if(numArr[i] > numArr[i+1] || i == numArr.length-1) {
        numArr.splice(i, 1);
        break;
      }
    }
    k--;
  }
  if (numArr.length == 0) {
    return 0;
  }
  return parseInt(numArr.join(''));
}


// Image: sortCharsByFrequency
// Input: 'tree'
// Output: 'eetr' or 'eert'
// Input: 'AAab'
// Output: 'bbaA' or 'bbAa'

// Approach:
// Will use the array to maintain count of
// the each alphabet in the String.
// Then will iterate over count array, find max at each point
// add the result array as count times character,
// reset the count of prev ch  are zero and find new max..
// repeat till the length of the original string.

function sortCharsByFrequency(str) {
  const charArray = Array.from('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
  const sArray = new Array(52);
  sArray.fill(0);
  const resultArr = new Array(str.length);
  for (let i = 0; i < str.length; i++) {
    const indexInCharArray = charArray.indexOf(str[i]);
    sArray[indexInCharArray]++;
  }
  for(let j = 0; j<str.length; j++) {
    const maxCount = Math.max(...sArray);
    const indexOfMax = sArray.indexOf(maxCount);
    resultArr.fill(charArray[indexOfMax], j);
    // reset this max to 0, to find the next max value
    sArray[indexOfMax] = 0;
    j = j + (maxCount - 1);
  }
  return resultArr.join('');
}
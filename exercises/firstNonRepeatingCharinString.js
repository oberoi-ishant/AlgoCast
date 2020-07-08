
// Find the first non repeating char in String and its index,
// else return -1.
// question:Image firstNonRepeatingCharInString
// Input: 'loveleetcode'
// Output: 2 (index)
function firstNonRepeatingCharInString(str) {
  let duplicateIndexes = [];
  for(let i = 0; i < str.length; i++) {
    if (duplicateIndexes.includes(i)) {
    // optimizing. Will skip the index as we already know
    // this element exists.
      continue;
    }
    let lastInd = str.lastIndexOf(str[i]);
    if (lastInd !== i) {
      duplicateIndexes.push(lastInd);
    } else {
      return i;
    }
  }
  return -1;
}
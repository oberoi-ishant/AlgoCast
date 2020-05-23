// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const strMap = {};
  let max = 0;
  let maxCh = null;
  for(let c of str) {
    strMap[c] = strMap[c] ? strMap[c]+1 : 1;
  }
  for (let i of strMap) {
    if (strMap[i] > max) {
      max = strMap[i];
      maxCh = i;
    }
  }
  return maxCh;
}

module.exports = maxChar;

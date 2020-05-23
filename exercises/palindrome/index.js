// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  let i = 0;
  const lastCharPos = str.length-1;
  const pivot = Math.floor(str.length / 2);
  while(i <= pivot) {
    if (str[i] === str[lastCharPos-i]) {
      if (i == pivot) {
        return true;
      }
    } else {
      return false;
    }
  }

}

module.exports = palindrome;

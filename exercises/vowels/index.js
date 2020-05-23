// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  // let count = 0;
  // const vArr = ['a', 'e', 'i', 'o', 'u'];
  // for (let char of str.toLowerCase()) {
  //   if (vArr.includes(char)) {
  //     count++;
  //   }
  // }
  // return count;

  /* Regex way */
  // match function returns an array of all matched elements else null
  const matches = str.match(/[aeiou]/gi) || [];
  return matches.length;
}

module.exports = vowels;

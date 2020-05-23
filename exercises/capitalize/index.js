// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const resultArr = [];
  for (word of str.split(' ')) {
    resultArr.push(word[0].toUpperCase() + word.slice(1));
  }
  return resultArr.join(' ');
  /*
    let resultStr = str[0].toUpperCase();
    for (let i = 1; i < str.length; i++) {
      if (str[i - 1] === ' ') {
        resultStr += str[i].toUpperCase();
      } else {
        resultStr += str[i];
      }
    }
    return resultStr;
  */
}

module.exports = capitalize;

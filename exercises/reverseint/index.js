// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const reversedNumer = n.toString().split('').reverse().join('');
  // if (n < 0) {
  //   return parseInt(reversedNumer) * -1;
  // } else {
  //   return parseInt(reversedNumer);
  // }
  return parseInt(reversedNumer) * Math.sign(n);
}

// parseInt("32-") == 32

module.exports = reverseInt;

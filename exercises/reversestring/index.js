// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

  return str.split('').reduce((startInput, currentVal) => `${currentVal}${startInput}`,  '');

  // const rstr = Array.prototype.reverse.apply(str.split(''));
  // return rstr.join('');

  /*
    return str.split('').reverse().join('');
  */
}

reverse('Yahoo');

module.exports = reverse;

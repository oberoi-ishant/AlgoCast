// Given a non-negative number represented as an array of digits,

// add 1 to the number ( increment the number represented by the digits ).

// The digits are stored such that the most significant digit is at the head of the list.

// Example:

// If the vector has [1, 2, 3]

// the returned vector should be [1, 2, 4]

// as 123 + 1 = 124.


// NOTE: Certain things are intentionally left unclear in this question which you should practice asking the interviewer.
// For example, for this problem, following are some good questions to ask :
// Q : Can the input have 0’s before the most significant digit. Or in other words, is 0 1 2 3 a valid input?
// A : For the purpose of this question, YES
// Q : Can the output have 0’s before the most significant digit? Or in other words, is 0 1 2 4 a valid output?
// A : For the purpose of this question, NO. Even if the input has zeroes before the most significant digit.

function plusOne(A) {
  var temp = [];
  var carry = 1;
  var res =[];
  var lastDigit = A[A.length-1];
  while(A.length) {
    var num = A.pop();
    if (num == 9 && carry == 1) {
      temp.unshift(0);
    } else  {
      temp.unshift(num + carry);
      carry = 0;
    }
  }
  temp.unshift(carry);
  var str = temp.join('');
  var num = parseInt(str);
  var strArr = num.toString().split('');
  for (var i = 0; i<strArr.length; i++) {
    res.push(parseInt(strArr[i]));
  }
  return res;
}


// function plusOne(A) {
//   var num = parseInt(A.join(''));
//   num++;
//   var temp = [];
//   var str = num.toString().split('');
//   for (var i = 0; i<str.length; i++) {
//     temp.push(parseInt(str[i]));
//   }
//   return temp;
// }

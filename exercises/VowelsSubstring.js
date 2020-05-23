//   You are given a string S, and you have to find all the amazing substrings of S.

//   Amazing Substring is one that starts with a vowel (a, e, i, o, u, A, E, I, O, U).

//   Input
//     ABEC

// Output
//     6

// Explanation
//   Amazing substrings of given string are :
//   1. A
//   2. AB
//   3. ABE
//   4. ABEC
//   5. E
//   6. EC
//   here number of substrings are 6 and 6 % 10003 = 6.

  // ABEC
  function countnsay (S) {
    var arr = S.split('');
    var len = arr.length;
    var res = [];
    var temp = [];
    while(arr.length) {
      var c = arr.shift();
      if (c == 'a' || c == 'A' || c == 'e' || c == 'E' || c == 'i' || c == 'I' ||
        c == 'o' || c == 'O' || c == 'u' || c == 'U') {
        temp = [];
        for (var j = 0; j <= arr.length; j++) {
          temp.push(c+arr.slice(0, j).join(''));
        }
        res.push(...temp);
      }
    }
    return res.length % 10003;
  }

  // Editors Solutions
  module.exports = {
  //param A : string
   //return an integer
      solve : function(A){
          function isVowel(c){
              return ("AEIOUaeiou".indexOf(c) > -1)? true: false;
          }
          var c = 0;
          var n = A.length
          for(var i = 0;i<n; i++) {
              if (isVowel(A[i])){
                  c += n - i; //No of pairs that will be formed
              }
          }
          return c % 10003;
      }
  };


   // The count-and-say sequence is the sequence of integers beginning as follows:
   // 1, 11, 21, 1211, 111221, ...
   // 1 is read off as one 1 or 11
   // 11 is read off as two 1s or 21.
   // 21 is read off as one 2, then one 1 or 1211.
   // Given an integer n, generate the nth sequence.
   // Note: The sequence of integers will be represented as a string.
   // if n = 2,
   //  the sequence is 11

  function countnsay (A) {
    var res = '1';
    var counter = 0;
    var result = '';
    for (var i = 0; i < A; i++) {
      counter = 1;
      result = '';
      for (var j = 0; j < res.length; j++) {
        if (res[j] === res[j+1]) {
          counter++;
        } else {
          result += `${counter}${res[j]}`;
          counter = 1;
        }
      }
      res = result;
    }
    return result;
  }

  // One loop.
  function countnsay (A) {
    let str = A.toString();
    let counter = 1;
    let result = '';
    for (let i = 0; i<str.length; i++) {
      if(str[i] == str[i+1]) {
        counter++;
      } else {
        result += `${counter}${str[i]}`;
        str = str.substr(counter, str.length);
        counter = 1;
        i = -1; // setting it -1, as for loop will again set it to 0
      }
    }
    return result;
  }

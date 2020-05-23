  // Given the array of strings A,
  // you need to find the longest string S which is the prefix of ALL the strings in the array.

  // Longest common prefix for a pair of strings S1 and S2 is the longest string S which is the prefix of both S1
  // and S2.

  // For Example, longest common prefix of "abcdefgh" and "abcefgh" is "abc".

  function LCP(A) {
    var len = A.length;
    var res = [];
    var minLen = A[0].length;
    // First find the smallest string in array
    for (j = 1; j < A.length; j++) {
      minLen = A[j].length <= minLen ? A[j].length : minLen;
    }

    // Iterate for the length of smallest string
    for (var i = 0; i < minLen; i++) {
      var n = 0;
      var temp = {};
      var ch = null;
      while (n < len) {
        ch = A[n][i];
        temp[ch] = ch;
        n++;
      }
      // If extracted ch is same, Object will have only one Key
      // else more than one key, break
      if (Object.keys(temp).length === 1) {
        res.push(temp[ch]);
      } else {
        break;
      }
    }
    return res.join('');
  }
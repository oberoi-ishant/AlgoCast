 // Find the repeated number in an Array
  function repeatedNumber (A) {
    const obj = {};
    for (var i = 0; i < A.length; i++) {
      if (obj[A[i]] === undefined) {
        obj[A[i]] = obj[A[i]] ? obj[A[i]] + 1 : 1;
      } else {
        return A[i];
      }
    }
    return -1;
  }

  // Or use indexOf

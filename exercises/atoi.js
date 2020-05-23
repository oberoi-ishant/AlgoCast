// Input : "9 2704"
    // Output : 9
    // Questions: Q1. Does string contain whitespace characters before the number?
    //   A. Yes Q2. Can the string have garbage characters after the number?
    //   A. Yes. Ignore it. Q3. If no numeric character is found before encountering garbage characters, what should I do?
    //   A. Return 0. Q4. What if the integer overflows?
    //   A. Return INT_MAX if the number is positive, INT_MIN otherwise.
  // ABEC
  // Implement atoi to convert a string to an integer.
  function atoi (A) {
    var myStr = A.trim();
    var num = 0;
    var isNumNegative = false;
    var INT_MIN = -Math.pow(2, 31);
    var INT_MAX = Math.pow(2, 31) - 1;
    var zeroCode = '0'.charCodeAt(0);
    var hasNumStarted = false;
    var sign = 1;
    for (var c = 0; c < myStr.length; c++) {
      var ch = myStr[c];
      var charCode = ch.charCodeAt(0);
      if (ch === ' ' && hasNumStarted) {
        break;
      } else if (ch === ' ' && !hasNumStarted) {
        continue;
      } else if (ch === '-' && !hasNumStarted) {
        hasNumStarted = true;
        sign = -1;
        continue;
      } else if (ch === '+' && !hasNumStarted) {
        hasNumStarted = true;
        sign = 1;
        continue;
      } else if (ch.charCodeAt(0) >= 48 && ch.charCodeAt(0) <= 57) {
        num = (num * 10) + (charCode - zeroCode);
        hasNumStarted = true;
        if (num * sign > INT_MAX) {
          return INT_MAX;
        } else if (num * sign < INT_MIN) {
          return INT_MIN;
        }
      } else {
        break;
      }
    }
    return num * sign;
  }
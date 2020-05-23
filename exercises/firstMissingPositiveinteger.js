
    // Given [1,2,0] return 3, [0, 1, 2]

    // [3,4,-1,1] return 2, [-1, 1, 3, 4]

    // [-8, -7, -6] returns 1

    function firstMissingPositive (A) {
      var sortArr = A.sort(function (a, b) {return a-b;});
      var res = 1;
      var allNegative = true;
      var isOnePresent = false;
      if (sortArr.length === 1) {
          if (sortArr[0] <= 0) {
            return 1;
          } else if (sortArr[0] == 1) {
            return 2;
          } else {
            return sortArr[0] -1 ;
          }
        }
      for (var i = 1; i < sortArr.length; i++) {
        var e1 = sortArr[i];
        var e2 = sortArr[i - 1];
        if (-1*(e1 * -1) >= 0 && -1*(e2 * -1) >= 0) {
          if (e1 == 1 || e2 ==1 ) {
            isOnePresent = true;
          }
          if (e1 - e2 === 1 || e1 - e2 === 0) {
            if (e1 !== 1 && !isOnePresent) {
              return 1;
            }
            if (i == sortArr.length - 1) {
              return e1 + 1;
            }
            continue;
          } else {
            if (isOnePresent) {
              return e2 + 1;
            } else {
              return 1;
            }

          }
        } else if (-1*(e1 * -1) < 0 && -1*(e2 * -1) < 0) {
          allNegative = false;
          continue;
        }
      }
      return 1;
    }

    // Site Editorial Solution Interview Bit
      // function firstMissingPositive (a) {

      //   var i;
      //   for(i=0; i<a.length;i++) {
      //       if(a[i]<=0) {
      //         a[i]=a.length+1;
      //       }
      //   }
      //   console.log(a);
      //   for(i=0;i<a.length;i++) {
      //       if(Math.abs(a[i])>0 && Math.abs(a[i])<=a.length) {
      //           a[Math.abs(a[i]) - 1] = -1 * Math.abs(a[Math.abs(a[i]) - 1]);
      //       }
      //   }
      //   console.log(a);
      //   for(i = 0; i< a.length;i++) {
      //       if(a[i]>0) {
      //         return i+1;
      //       }
      //   }
      //   console.log(a);
      //   return i+1
      // }


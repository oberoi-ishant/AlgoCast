  // Longest contiguous Subarray
  // maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])
  // Output : 6
  function maxSubArray (A) {
    var sum = 0;
    var currentSum = 0;
    for (var i = 0; i < A.length; i++) {
      currentSum += A[i];
      if (currentSum < 0 && sum == 0) {
        sum = currentSum;
      } else {
        sum = Math.max(sum, currentSum);
      }
      if (currentSum < 0) {
        currentSum = 0;
      }
    }
    return sum;
  }

  // var res = null;
  // for (var i = 0; i < A.length; i++) {
  //   var sum = 0;
  //   var tempSumArr = [];
  //   for(var j = i; j < A.length; j++) {
  //     sum = sum + A[j];
  //     tempSumArr.push(sum);
  //   }
  //   var currentMaxSum = tempSumArr[0];
  //   for (var k = 1; k<tempSumArr.length; k++) {
  //     if (currentMaxSum < tempSumArr[k]) {
  //       currentMaxSum = tempSumArr[k];
  //     }
  //   }
  //   if (res) {
  //     res =  res < currentMaxSum ? currentMaxSum : res;
  //   } else {
  //     res = currentMaxSum;
  //   }
  // }
  // return res;
//}
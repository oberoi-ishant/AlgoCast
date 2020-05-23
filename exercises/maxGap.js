// Max gap in consecutive elements
// Input [1,4,3,7,5] =>[1,3,4,5,7]
// Output 2
  function maximumGap (A) {
    var gap = 0;
    var sortA = A.sort(function (a,b){ return a-b; });
    for (var i = 0; i < sortA.length - 1; i++) {
      var tem = sortA[i+1] - sortA[i];
      gap = tem > gap ? tem : gap;
    }
    return gap;
  }
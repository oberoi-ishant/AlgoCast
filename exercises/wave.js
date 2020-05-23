// wave array [2,1,3,5,4] ===> a1>=a2<=a3>=a4<=a5...
// [2,1,4,3,5]

function wave (A) {
  var sortA = A.sort(function (a,b){return a-b;});
  var res = [];
  for (var i = 1; i <= A.length; i+=2) {
    if (sortA[i] !== undefined) {
      res.push(sortA[i]);
    }
    if (sortA[i - 1] !== undefined) {
      res.push(sortA[i - 1]);
    }
  }
  return res;
}

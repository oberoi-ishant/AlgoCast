// Snakes n ladders
// O(n)
function snl() {
  const result = [];
  let rowArr = [];
  for (let i = 100; i > 0; i--) {
    rowArr.push(i);
    if (rowArr.length == 10) {
      const lastRowElem = rowArr[rowArr.length - 1];
      const isRowOdd = Math.floor(lastRowElem / 10) % 2 !== 0;
      if (isRowOdd) {
        result.push([...rowArr]);
      } else {
        result.push([...rowArr.reverse()]);
      }
      rowArr = [];
    }
  }
  console.log(result);
}

// O(n*n)
function snl() {
  const arr = [];
  for (let row = 0; row < 10; row++) {
    let n = 1;
    let rowData = [];
    while (n <= 10) {
      if (row % 2 !== 0) {
        rowData.unshift(n + (row*10));
      } else {
        rowData.push(n + (row*10));
      }
      n++;
    }
    arr.push(rowData);
  }
  console.log(arr);
}
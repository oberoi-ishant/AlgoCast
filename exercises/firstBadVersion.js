
// question:Image firstBadVersion

// Will solve it using Divide and Conquer
function firstBadVersion(n) {
  let start = 0;
  let end = n;
  while(start < end) {
    let mid = start + parseInt((end-start)/2);
    if (isBadVersion(mid)) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return start;
}

function isBadVersion(n) {
  return n >= 4 ? true : false;
}
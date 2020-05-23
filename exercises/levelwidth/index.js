// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const node = root;
  const arr = [node, 's'];
  const counters = [0];
  while(arr.length > 1) {
    let n = arr.shift();
    if (n !== 's') {
      counters[counters.length - 1]++;
      arr.push(...n.children);
    } else {
      arr.push('s');
      counters.push(0);
    }
  }
  return counters;
}

module.exports = levelWidth;

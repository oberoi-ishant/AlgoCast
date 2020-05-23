// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

const Queue = require('./queue');

const q1 = new Queue();
const q2 = new Queue();
q1.add(1);
q2.add(2);
q2.add('Hi')
q2.add('There');
q2.add('Boy');

function weave(q1, q2) {
  const q = new Queue();
  const len1 = q1.length;
  const len2 = q2.length;
  while (q1.peek() || q2.peek()) {
    if (q1.peek() !== undefined) {
      q.add(q1.remove())
    }
    if (q2.peek() !== undefined) {
      q.add(q2.remove())
    }
  }
  return q;
}

/* wihtout the peek function */
function weave(q1, q2) {
  const q = new Queue();
  const len1 = q1.length;
  const len2 = q2.length;
  const itrQ = len1 > len2 ? q2 : q1;
  while (itrQ.length) {
    q.add(q1.remove());
    q.add(q2.remove());
  }
  const itrQ2 = q1.length ? q1 : q2;
  while (itrQ2.length) {
    q.add(itrQ2.remove());
  }
  return q;
}

module.exports = weave;

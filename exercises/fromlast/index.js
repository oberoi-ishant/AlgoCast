// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
  let slow = list.getFirst();
  let fast = list.getFirst();
  // advance fast n elements.
  // So that the gap between them is n
  while (n > 0) {
    fast = fast.next;
  }
  // no increment both by one element.
  // gap between them is  always n
  // when fast points to null
  // slow is n spaces from end(fast)
  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
}

module.exports = fromLast;

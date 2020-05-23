// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  constructor () {
    this.data = [];
  }

  add (record) {
    return this.data.unshift(record);
  }

  remove () {
    return this.data.pop();
  }

  // Since queue is implemented as an array. So for FIFO Queue,
  // arrays last element will be the first to get pop.
  // Input 1, 2, 3 ---> Queue [3,2,1] First in First Out
  peek () {
    return this.data[this.data.length - 1];
  }
}

module.exports = Queue;

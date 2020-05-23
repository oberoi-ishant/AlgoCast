// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor () {
    this.head = null;
  }

  insertFirst (data) {
    this.head = new Node(data, this.head);
  }

  size () {
    let count = 0;
    let node = this.head;
    while (node !== null) {
      count++;
      node = node.next;
    }
    return count;
  }

  getFirst () {
    return this.head;
  }

  getLast () {
    let lastNode = this.head;
    while (lastNode && lastNode.next) {
      lastNode = lastNode.next;
    }
    return lastNode;
  }

  clear () {
    this.head = null;
  }

  removeFirst () {
    if (!this.head) return;
    this.head = this.head.next;
  }

  removeLast () {
    let node = this.head;
    let previous = null;
    while (node && node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  insertLast (data) {
    const lastNode = this.getLast();
    if (lastNode) {
      lastNode.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  getAt (index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    return null;
  }

  removeAt (index) {
    let counter = 0;
    let node = this.head;
    if (index == 0) {
      this.head = this.head.next;
    }
    let prev = this.getAt(index - 1); // You may give a index larger than list size
    if (!prev || !prev.next) return;

    prev.next = prev.next.next;
  }

  insertAt (data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (index == 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const prev = this.getAt(index - 1);
    if (!prev) {
      prev = this.getLast();
    }
    prev.next = new Node(data, prev.next);

  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next
    };
  }

}

module.exports = { Node, LinkedList };

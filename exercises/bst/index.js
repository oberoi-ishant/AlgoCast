// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert (data) {
    if (data < this.data && this.left) {
      this.left.insert(data);
    } else if (data < this.data && !this.left) {
      this.left = new Node(data);
    } else if (data > this.data && this.right) {
      this.right.insert(data);
    } else {
      this.right.insert(data);
    }
  }

  contains (data) {
    if (data == this.data) {
      return this;
    } else if (data < this.data && this.left) {
       return this.left.contains(data);
    } else if (data > this.data && this.right) {
      return this.right.contains(data);
    }
    return null;
  }

  validate (node, min = null, max = null) {
    if (max !== null && node.data > max) {
      return false;
    }

    if (min !== null && node.data < min) {
      return false;
    }

    if (node.left && !validate(node.left, min, node.data)) {
      return false;
    }

    if (node.right && !validate(node.right, node.data, max)) {
      return false;
    }
    return true;
  }

}

module.exports = Node;

// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  // add a new node
  add(data) {
    this.children.push(new Node(data));
  }

  // remove a child node with the given data
  remove(data) {
    this.children = this.children.filter(node => node.data !== data);
  }
}

const nodeObj = new Node(10);

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF (fn) {
    const arr = [this.root];
    while(arr.length) {
      const node = arr.shift(); // get the first element from the array
      arr.push(...node.children);
      fn(node);
    }
  }

  traverseDF (fn) {
    const arr =  [this.root];
    while(arr.length) {
      const node = arr.shift();
      fn(node);
      arr.unshift(...node.children);
    }
  }
}

const treeObj = new Tree();
treeObj.root = nodeObj;

module.exports = { Tree, Node };

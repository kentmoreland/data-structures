let expect = require('chai').expect;

let Tree = require('../binarySearchTree/binarySearchTree');

let bst = Tree.Tree;
let node = Tree.Node;

describe('binarySearchTree', () => {
  let tree = new bst(10);
  it('should be a function', () => {
    expect(bst).to.be.a('function');
  });
  it('should have a root', () => {
    expect(tree.root.value).to.equal(10);
  });
});

describe('binarySearchTree add method', () => {
  let tree = new bst(10);
  tree.add(8);
  tree.add(12);
  console.log(tree);
  it('should be a function', () => {
    expect(tree.add).to.be.a('function');
  });

  it('should add a value to the left of the tree', () => {
    expect(tree.root.left.value).to.equal(8);
  });

  it('should add a value to the right of the tree', () => {
    expect(tree.root.right.value).to.equal(12);
  });

describe('binarySearchTree search method', () => {
  let tree = new bst(10);
  let newNode = new node(12);
  tree.root.right = newNode;
  console.log(tree);
  it('should be a function', () => {
    expect(tree.search).to.be.a('function');
  });

  it('should find a value in the list', () => {
    expect(tree.search(12)).to.equal(true);
  });

  it('should return false if a value is not in the list', () => {
    expect(tree.search(1400)).to.equal(false);
  });
});

});


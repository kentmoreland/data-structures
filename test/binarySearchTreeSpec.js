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

  describe('add method', () => {
    let tree = new bst(10);
    tree.add(8);
    tree.add(12);

    it('should be a function', () => {
      expect(tree.add).to.be.a('function');
    });

    it('should add a value to the left of the tree', () => {
      expect(tree.root.left.value).to.equal(8);
    });

    it('should add a value to the right of the tree', () => {
      expect(tree.root.right.value).to.equal(12);
    });
  });

  describe('search method', () => {
    let tree = new bst(10);
    let newNode = new node(12);
    tree.root.right = newNode;
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

  describe('delete method', () => {
    let tree = new bst(10);
    let newNode = new node(12);
    tree.root.right = newNode;

    it('should be a function', () => {
      expect(tree.delete).to.be.a('function');
    });

    it('should delete a node from the tree', () => {
      tree.delete(12);
      expect(tree.root.right).to.equal(undefined);
    });


  });


  describe('getMin', () => {
    let tree = new bst(10);
    let seven = new node(7);
    let eight = new node(8);
    let nine = new node(9);
    let eleven = new node(11);
    let twelve = new node(12);
    let thirteen = new node(13);

    tree.root.left = nine;
    tree.root.left.left = eight;
    tree.root.left.left.left = seven;
    tree.root.right = eleven;
    tree.root.right.right = twelve;
    tree.root.right.right.right = thirteen;


    it('should be a function', () => {
      expect(tree.getMinVal).to.be.a('function');
    });

    it('should find the minimum value of a tree', () => {
      expect(tree.getMinVal(tree)).to.equal(8);
    });
  });


  describe('removeNode', () => {
    let tree = new bst(10);

    it('should be a function', () => {
      expect(tree.removeNode).to.be.a('function');
    });

    it('should remove a leaf node from a tree', () => {
      let eight = new node(8);
      let nine = new node(9);
      tree.root.left = nine;
      tree.root.left.left = eight;
      tree.removeNode(tree.root.left, tree.root.left.left );

      expect(tree.root.left.left).to.equal(undefined);
    });

    it('should remove a node with no siblings', () => {
        let tree = new bst(10);
        let eight = new node(8);
        let nine = new node(9);
        let eleven = new node(11);
        let twelve = new node(12);
        let thirteen = new node(13);

        tree.root.left = nine;
        tree.root.left.left = eight;
        tree.root.right = eleven;
        tree.root.right.right = twelve;
        tree.root.right.right.right = thirteen;

        tree.removeNode(tree.root.right.right, tree.root.right.right.right);

        expect(tree.root.right.right.right).to.equal(undefined);


    });

    it('should remove a node with two siblings', () => {

      let tree = new bst(10);
      let eight = new node(8);
      let nine = new node(9);
      let eleven = new node(11);
      let twelve = new node(12);
      let thirteen = new node(13);

      tree.root.left = nine;
      tree.root.left.left = eight;
      tree.root.right = eleven;
      tree.root.right.right = twelve;
      tree.root.right.right.right = thirteen;

      tree.removeNode(tree.root.left, tree.root.left.left);

      expect(tree.root.left.left).to.equal.undefined;

    });

  });


});





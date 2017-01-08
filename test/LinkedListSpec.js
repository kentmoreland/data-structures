expect = require('chai').expect;

describe('LinkedList', function () {
  LinkedList = require('../LinkedList/linkedList.js').LinkedList;
  Node = require('../LinkedList/linkedList.js').Node;

  describe('LinkedList', function(){
    let list = new LinkedList();

    it('should contain a linkedList class', () => {
      expect(list).to.exist;
    });

    it('should contain a length property', () => {
      expect(list.length).to.exist;
    });

    it('should contain a push method', () => {
      expect(list.push).to.exist;
    });

    it('should contain a pop method', () => {
      expect(list.pop).to.exist;
    });

    it('should contain a get method', () => {
      expect(list.get).to.exist;
    });

    it('should contain a delete method', () => {
      expect(list.delete).to.exist;
    });



  });

  describe ('Node', () => {
    let n = new Node(5);

    it('should contain a node class', () => {
      expect(n).to.exist;
    });

    it('should contain a value property', () => {
      expect (n.value).to.exist;
    });

    it('should contain a next property', () => {
      expect(n.next).to.equal(undefined);
    });
  });

  describe('push', () => {
    let list = new LinkedList();
    list.push(3);
    list.push(4);

    it('should increment the length of the list', () => {
      expect(list.length).to.equal(2);
    });

    it('should add the value to the end of the list', () => {
      expect(list.head.next.value).to.equal(4);
    });

  });

  describe('pop', () => {
    let list = new LinkedList();
    list.push(3);
    list.push(4);
    let four = list.pop();

    it('should decrease the length of the list', () => {
      expect(list.length).to.equal(1);
    });

    it('should return the last value on the list', () => {
      expect(four).to.equal(4);
    });

    it('should remove the last node from the list', () => {
      expect(list.head.next.value).to.equal(undefined);
    });

  });

  describe('get', () => {
    let list = new LinkedList();
    list.push(3);
    list.push(4);
    list.push(5);
    let five = list.get(2);
    let six = list.get(3);

    it('should return the value at the given index', () => {
      expect(five).to.equal(5);
    });

  });

  describe('delete', () => {
    let list = new LinkedList();
    list.push(3);
    list.push(4);
    list.push(5);

    let five = list.delete(2);


    it('should return the deleted value', () => {
      expect(five).to.equal(5);
    });

    it('should delete the value at the given index', () => {
      expect(list.get(2)).to.equal(undefined);
    });

    it('should decrement the length of the list', () => {
      expect(list.length).to.equal(2);
    });

    it('should collapse the list after the deletion', () => {
      let four = list.delete(1);
      expect(list.get(1)).to.equal(undefined);
    });

  });


});
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
    })



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

    it('should add to the length of the list', () => {
      expect(list.length).to.equal(2)
    });

    it('should add the value to the end of the list', () => {
      expect(list.head.next.value).to.equal(4);
    });

  });

  describe('pop', () => {

  });

  describe('get', () => {

  });

  describe('delete', () => {

  });


});
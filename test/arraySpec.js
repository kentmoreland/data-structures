const expect = require('chai').expect;

describe('ArrayList', function(){

  ArrayList = require('../Array/array.js').ArrayList;

  describe('ArrayList methods', () => {

      before(() => {
        list = new ArrayList();
      });


    it('should contain a class ArrayList', () => {
      expect(list).to.be.an.instanceof(ArrayList);
    });

    it('should contain a method push', () => {
      expect(list.push).to.exist;
    });

    it('should contain a method get', () => {
      expect(list.get).to.exist;
    });

    it('should contain a method pop', () => {
      expect(list.pop).to.exist;
    });

    it('should contain a method delete', () => {
      expect(list.delete).to.exist;
    });

    it('should contain a method collapseR', () => {
      expect (list.collapseR).to.exist;
    });

    it('should contain a method shift', () => {
      expect(list.shift).to.exist;
    });

  });

  describe('push', function() {
    before(() => {
      list.push(5);
      list.push(6);
      list.push(7);
    });

    it('should accept a value and add it to the end of the list', () => {
      expect(list.data[2]).to.equal(7);
    });

    it('should update the list length when a value is added', () => {
      expect(list.length).to.equal(3);
    });

  });


  describe('pop', function () {
    let seven;

    before(() => {
      seven = list.pop();
    });

    after(() => {
      list.length++;
    });

    it('should remove the last value of the list and return it', () => {
      expect(seven).to.equal(7);

    });

    it('should shorten the list by one after pop method is called', () => {
      expect(list.length).to.equal(2);
    });

  });

  describe('shift', () => {
    let five;
    before(() => {
      five = list.shift();
    });

    it('should remove an item in the list', () => {
      expect(list.length).to.equal(2);
    });

    it('should return the first value in the list', () => {
      expect(five).to.equal(5);
    });

  });

  describe('unshift', () => {
    before(() => {
      list.unshift(5);
    });

    it('should add a value to the list', () => {
      expect(list.length).to.equal(3);
    });

    it('should add the value to the beginning of the list', () => {
      expect(list.data[0]).to.equal(5);
    });

    it('should adjust the remaining values in the list', () => {
      expect(list.data[1]).to.equal(6);
    });

  });


  describe('get', function(){
    it('should accept an index, and return the value at that index', () => {
      expect(list.get(0)).to.equal(5);
    });

  });

  describe('delete', function(){
    let six;
    before(() => {
      six = list.delete(1);
    });

    it('should remove the value from a given index from the list', () => {
      expect(six).to.equal(6);
    });

    it('should collapse the list after deletions', () => {
       expect(list.data[1]).to.equal(7);
    });

  });


});
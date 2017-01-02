class Node {
  constructor (value) {
    this.value = value;
    this.next = undefined;
  }
}

class LinkedList {
  constructor (){
    this.length = 0;
    this.head = undefined;
  }

  push (value){
    let node = new Node(value);
    if(this.length === 0){
      this.head = node;
    }else {
      let it = this.head;
      while(it.next !== undefined){
        it = it.next;
      }
      it.next = node;
    }
    this.length++
  }

  pop () {

  }

  get () {

  }

  delete () {

  }
}

module.exports.Node = Node;
module.exports.LinkedList = LinkedList;
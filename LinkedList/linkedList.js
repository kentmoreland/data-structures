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

  push (val){
    let node = new Node(val);
    let it = this.head;
    if(!this.length){
      this.head = node;
    } else {
      while(it.next){
        it = it.next;
      }
      it.next = node;
    }
    this.length++;
  }

  pop () {
    let pt = this.head;
    let n;
    while(pt.next){
      pt = pt.next;
    }
    n = pt.value;
    delete pt.next;
    delete pt.value;
    this.length--;
    return n;
  }

  get (index) {
    let it = this.head;
    for(let i = 0; i < index; i++){
      it = it.next;
    }
    return !it ? undefined : it.value;
  }

  delete (index) {
    let it = this.head;
    let prev;
    let v;
    for(let i = 0; i < index; i++){
      prev = it;
      it = it.next;
    }
    v = it.value;
    if(it.next){
      prev.next = it.next;
    } else {
      prev.next = undefined;
    }
    this.length -= 1;
    return v;
  }
}

module.exports.Node = Node;
module.exports.LinkedList = LinkedList;
class Tree {
  constructor (value) {
    this.root = new Node(value);
  }

  add (value) {
    let newNode = new Node(value);
    let it = this.root, cont = true;
    while(cont){
      if (it.value > value){
        if(it.left){ it = it.left; }
        else{ it.left = newNode; cont = false; }
      }else if (it.value < value){
        if(it.right){ it = it.right; }
        else{ it.right = newNode; cont = false; }
      }else {
        return 'value already exists';
      }
    }
  }

  search (value) {
    let it = this.root;
    while(it){
      if(it.value === value){ return true; }
      else if(it.value < this.value){ it = it.left; }
      else{ it = it.right; }
      }
    return false;
    }
}

class Node {
  constructor (value) {
    this.value = value;
    this.left = undefined;
    this.right = undefined;
  }
}




module.exports.Tree = Tree;
module.exports.Node = Node;
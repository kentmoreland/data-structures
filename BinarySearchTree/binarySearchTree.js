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

  getMinVal (tree) {
    let it = tree.root;
    let q = [];
    let min = tree.root.value;
    while(it){
      if(it.value < min){ min = it.value; }
      q.push(it.left, it.right);
      it = q.shift();
    }
    return min;
  }

  removeNode(previous, current){
    // if neither
    if(!current.left && !current.right){
        if(current.value < previous.value){ previous.left = undefined; }
        else if( current.value > previous.value){ previous.right = undefined; }

    //if both
    } else if (current.left && current.right){
     let start = current.right;
     let loval = getMinVal(start);
     current.value = loval.value;
     loval = undefined;

    //if one not the other
    }else {
      if(current.left){
        previous.left = current.left;
        current = undefined;
      }else{
        previous.right = current.right;
        current = undefined;
      }

    }
  }

  delete (value) {
    // let it = this.root, prev = this.root;
    // while(it){
    //   if(it === value){
    //     //do something

    //   } else if(value < it.value) {
    //     //do something else
    //   }else {
    //     //do something even more elsy
    //   }
    // }
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
class ArrayList {
  constructor (){
    this.length = 0;
    this.data = {};
  }

  push(value) {
    this.data[this.length] = value;
    this.length++;
  }

  get(index) {
    return this.data[index];
  }

  pop(){
    let result = this.data[this.length - 1];
    this.length--;
    return result;
  }

  shift(){
    let result = this.data[0];
    this.collapseR(0);
    delete this.data[this.length - 1];
    this.length--;
    return result;
  }

  unshift(value){
    let next;
    for(let i = 0; i <= this.length; i++){
       next = this.data[i]; // 5
       this.data[i] = value; // 4
       value = next; // 5
    }
    this.length++;
  }

  collapseR(index){
    for(let i = index; i < this.length; i++){
      if(this.data[i + 1]){
        this.data[i] = this.data[i + 1];
      }
    }
  }

  delete(index){
    let result = this.data[index];
    this.collapseR(index);
    delete this.data[this.length - 1];
    this.length--;
    return result;
  };

};


module.exports.ArrayList = ArrayList;
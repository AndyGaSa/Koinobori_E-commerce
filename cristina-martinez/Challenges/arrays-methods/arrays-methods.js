class SkylabArray {
  constructor() {
    this.length = 0;
  }

  push(x) {
    this.length += 1;
    this[this.length - 1] = x;
    return this.length;
  }
  some(x){
      if(){
      return true
      }else{
          return false
      }
  }
}

const a = new SkylabArray();
a.push(67);
a.push(99);
console.log(a);

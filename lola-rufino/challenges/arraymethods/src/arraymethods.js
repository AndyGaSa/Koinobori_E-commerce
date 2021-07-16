class SkylabArray {
  constructor() {
    this.length = 0;
  }

  push(param) {
    this[this.length] = param;
    this.length += 1;
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    }
    this.length -= 1;
    delete this[this.length];
  }
}

const array1 = new SkylabArray();

array1.push('Lola');
array1.push('Alvaro');

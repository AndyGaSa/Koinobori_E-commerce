class SkylabArray {
  constructor() {
    this.long = 0;
  }

  push(...rest) {
    const arr = [...rest];
    arr.forEach((element) => {
      this[this.long] = element;
      this.long += 1;
    });
    return arr;
  }

  pop() {
    if (this.long === 0) {
      return 'Error';
    }
    delete this[this.long - 1];
    this.long -= 1;
    return this.long;
  }

  some(el) {
    let value = false;
    for (let i = 0; i < this.long; i += 1) {
      if (this[i] === el) {
        value = true;
      }
    }
    return value;
  }

  find(callback) {
    const fun = callback;
    for (let i = 0; i < this.long; i += 1) {
      if (fun(this[i])) {
        return this[i];
      }
    }
    return undefined;
  }
}

const a = new SkylabArray();
a.push(true);
a.push(14);
a.push(34, 45, 34, 'pere');

console.log(a.find((element) => element > 10));

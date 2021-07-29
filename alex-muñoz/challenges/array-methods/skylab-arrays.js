class SkylabArray {
  constructor() {
    this.long = 0;
  }

  skyPush(el) {
    this[this.long] = el;
    this.long += 1;
    return this.long;
  }

  skyPop() {
    if (this.long === 0) {
      return 'Error';
    }
    delete this[this.long - 1];
    this.long -= 1;
    return this.long;
  }

  skySome(el) {
    let value = false;
    for (let i = 0; i < this.long; i += 1) {
      if (this[i] === el) {
        value = true;
      }
    }
    return value;
  }

  skyFind(callback) {
    for (let i = 0; i < this.long; i += 1) {
      if (callback(this[i])) {
        return this[i];
      }
    }
    return undefined;
  }

  skyMap(callback) {
    const x = {};
    for (let i = 0; i < this.long; i += 1) {
      x[i] = callback(this[i]);
    }
    return x;
  }
}
const arr = new SkylabArray();

arr.skyPush(1);
arr.skyPush(4);
arr.skyPush('ala');
arr.skyPush(16);
const newarray = arr.skyMap((x) => x * 2);
console.log(newarray);

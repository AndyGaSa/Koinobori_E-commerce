class SkylabArray {
  constructor() {
    this.length = 0;
  }

  push(el) {
    this[this.length] = el;
    this.length += 1;
    return this.length;
  }

  pop() {
    if (this.length === 0) return undefined;
    const aux = this[this.length - 1];
    delete this[this.length - 1];
    this.length -= 1;
    return aux;
  }

  some(callback) {
    for (let i = 0; i < this.length; i += 1) {
      if (callback(this[i])) return true;
    }
    return false;
  }

  find(callback) {
    for (let i = 0; i < this.length; i += 1) {
      if (callback(this[i])) return this[i];
    }
    return undefined;
  }

  filter(callback) {
    const aux = new SkylabArray();
    for (let i = 0; i < this.length; i += 1) {
      if (callback(this[i])) aux.push(this[i]);
    }
    return aux;
  }

  map(callback) {
    const aux = new SkylabArray();
    for (let i = 0; i < this.length; i += 1) {
      aux.push(callback(this[i]));
    }
    return aux;
  }

  reverse() {
    const aux = new SkylabArray();
    // eslint-disable-next-line for-direction
    for (let i = this.length - 1; i >= 0; i -= 1) {
      aux.push(this[i]);
    }
    for (let i = 0; i < this.length; i += 1) {
      this[i] = aux[i];
    }
    return aux;
  }

  concat(sArr) {
    const aux = new SkylabArray();
    for (let i = 0; i < this.length; i += 1) {
      aux.push(this[i]);
    }
    if (sArr.constructor === SkylabArray) {
      for (let i = 0; i < sArr.length; i += 1) {
        aux.push(sArr[i]);
      }
    } else {
      aux.push(sArr);
    }
    return aux;
  }
}

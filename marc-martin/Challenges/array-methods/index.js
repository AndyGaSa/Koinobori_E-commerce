// function (export, module, require, __filename,__dirname)

class SkylabArray {
  constructor() {
    this.length = 0;
  }

  length() {
    return this.length;
  }

  skylabPush(newValue) {
    // en este caso el primer this será el index 0
    // el [this.length] suma el indice si hay un new value
    // newValue acepta un valor
    this[this.length] = newValue;
    this.length += 1;
    return this.length;
  }

  skylabPop() {
    const lastValue = this[this.length - 1];
    delete this[this.length - 1];
    this.length -= 1;
    return lastValue;
  }

  skylabMap(callback) {
    const newArray = new SkylabArray();

    for (let index = 0; index < this.length - 1; index += 1) {
      const element = callback(this[index]);
      newArray.skylabPush(element);
    }
    return newArray;
  }

  skylabSome(callback) {
    for (let i = 0; i < this.length; i += 1) {
      if (callback(this[i])) return true;
    }
    return false;
  }

  skylabFilter(callback) {
    const aux = new SkylabArray();
    for (let i = 0; i < this.length; i += 1) {
      if (callback(this[i])) return this[i];
    }
    return aux;
  }
}

module.exports = SkylabArray;

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

  skylabMap() {
    const newArray = new SkylabArray();

    for (let index = 0; index < this.length - 1; index += 1) {
      const element = callback(this[index]);
      newArray.skylabPush(element);
    }
    return newArray;
  }
}

module.exports = SkylabArray;

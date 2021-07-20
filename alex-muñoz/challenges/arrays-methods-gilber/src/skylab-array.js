// function(export,module,require,filename,dirname) cada fichero , js lo envuelve
// en una funcion ( un modulo es una carpeta q contiene codigo)
class SkylabArray {
  constructor() {
    this.length = 0;
  }

  push(newValue) {
    this[this.length] = newValue;
    this.length += 1;

    return this.length;
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    }
    delete this[this.length - 1];
    this.length -= 1;
    return this.length;
  }

  some(callback) {
    let value = false;
    for (let index = 0; index < this.length; index += 1) {
      if (callback(this[index])) {
        value = true;
      }
    }
    return value;
  }

  map(callback) {
    const mapArray = new SkylabArray();
    for (let index = 0; index < this.length; index += 1) {
      mapArray[index].push(callback[this[index]]);
    }
    return mapArray;
  }
}

module.exports = SkylabArray;

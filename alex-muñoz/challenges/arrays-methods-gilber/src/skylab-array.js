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

  map(callback) {
    let newArray;
    for (let index = 0; index < this.length; index += 1) {
      const element = callback(this[index]);
      newArray.push(element);
    }

    return newArray;
  }
}

module.exports = SkylabArray;

// function (export, module, require, filename, dirname) {}

class SkylabArray {
  constructor(arr) {
    this.length = 0;
  }

  push(newValue) {
    this[this.length] = newValue;
    this.length += 1;
    return this.length;
  }

  pop() {
    const lastValue = this[this.length - 1];
    delete this[this.length - 1];
    this[this.length] -= 1;
    return lastValue;
  }
}

map(callback) {
  const newArray = new SkylabArray();
  for (let index = 0; index < this.length - 1; index++) {
    const element = callback(this[index]);
    newArray.push(element);
  }
  return newArray;
}

module.exports = SkylabArray;
// define what we export - a class to use it in another module

const pushSimulator = function (...newElement) {
  arr[arr.length] = newElement;
  return arr;
};

const mapSimulator = function (arr, callback, thisArg) {
  let i; const { length } = arr; const
    results = [];
  for (i = 0; i < length; i += 1) {
    results.push(callback.call(thisArg, arr[i], i, arr));
  }
  return results;
};

const filterSimulator = function (arr, callback, thisArg) {
  let i; const { length } = arr; const
    results = [];
  for (i = 0; i < length; i += 1) {
    if (callback.call(thisArg, arr[i], i, arr)) {
      results.push(arr[i]);
    }
  }
  return results;
};

const someSimulator = function (arr, callback, thisArg) {
  let i; const
    { length } = arr;
  for (i = 0; i < length; i += 1) {
    if (callback.call(thisArg, arr[i], i, arr)) {
      return true;
    }
  }
  return false;
};

const lengthSimulator = function (arr) {
  let length = 0;
  while (arr[length] !== undefined) {
    length++;
  }
  return length;
};

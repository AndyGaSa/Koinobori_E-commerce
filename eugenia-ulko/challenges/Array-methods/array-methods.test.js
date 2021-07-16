class SkylabArray {
  constructor(arr) {
    this._dlina = 0;
  }
}

const pushSimulator = function (arr, newElement) {
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

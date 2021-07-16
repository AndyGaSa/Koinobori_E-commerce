class SkylabArray {
  constructor(oldArray) {
    this.oldArray = oldArray;
  }

  length() {
    let i = 0;
    while (this.oldArray[i] !== undefined) {
      i += 1;
    }
    return i;
  }

  push(value) {
    this.value = value;
    let i = 0;
    while (this.oldArray[i] !== undefined) {
      i += 1;
    }
    this.oldArray[i] = value;
    return this.oldArray;
  }

  some(even) {
    this.even = even;
    for (let i = 0; this.oldArray[i] !== undefined; i += 1) {
      if (even(this.oldArray[i])) {
        return true;
      }
    }
    return false;
  }

  find(found) {
    this.found = found;
    for (let i = 0; this.oldArray[i] !== undefined; i += 1) {
      if (this.found(this.oldArray[i])) {
        return this.oldArray[i];
      }
    }
    return undefined;
  }

  filter(result) {
    this.result = result;
    const newArray0 = [];
    for (let i = 0; this.oldArray[i] !== undefined; i += 1) {
      if (result(this.oldArray[i])) {
        newArray0.push(this.oldArray[i]);
      }
    }
    return newArray0;
  }

  map(multiply) {
    this.multiply = multiply;
    const newArray1 = [];
    for (let i = 0; this.oldArray[i] !== undefined; i += 1) {
      if (multiply(this.oldArray[i])) {
        newArray1.push(multiply(this.oldArray[i]));
      }
    }
    return newArray1;
  }
}

const oldArray = [2, 3, 12, 24];
const value = 1;
const skylabArray = new SkylabArray(oldArray);
const even = (element) => element % 2 === 0;
const found = (element) => element > 10;
const result = (element) => element > 6;
const multiply = (element) => element * 3;

test('skylabArray.length()', () => {
  expect(skylabArray.length()).toStrictEqual(4);
});

test('skylabArray.push()', () => {
  expect(skylabArray.push(value)).toStrictEqual([2, 3, 12, 24, 1]);
});

test('skylabArray.some()', () => {
  expect(skylabArray.some(even)).toStrictEqual(true);
});

test('skylabArray.find()', () => {
  expect(skylabArray.find(found)).toStrictEqual(12);
});

test('skylabArray.filter()', () => {
  expect(skylabArray.filter(result)).toStrictEqual([12, 24]);
});

test('skylabArray.map()', () => {
  expect(skylabArray.map(multiply)).toStrictEqual([6, 9, 36, 72, 3]);
});

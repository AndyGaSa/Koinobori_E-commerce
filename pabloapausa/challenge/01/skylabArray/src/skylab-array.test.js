const SkylabArray = require('./skylab-array');

const oldArray = [2, 3, 12, 24];
const value = 1;
const even = (element) => element % 2 === 0;
const found = (element) => element > 10;
const result = (element) => element > 6;
const multiply = (element) => element * 3;

describe('', () => {
  const skylabArray = new SkylabArray(oldArray);
  test('skylabArray.length', () => {
    expect(skylabArray.length).toStrictEqual(4);
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
});

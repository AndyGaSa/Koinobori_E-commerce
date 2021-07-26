function strictEquals(a, b) {
  if ((Object.is(a, NaN)) && (Object.is(b, NaN))) {
    return false;
  }
  if ((Object.is(a, 0)) && (Object.is(b, -0))) {
    return true;
  }
  if ((Object.is(a, -0)) && (Object.is(b, 0))) {
    return true;
  }
  if (Object.is(a, b)) {
    return true;
  }
  return false;
}

test('Compare 1 to 1 is true', () => {
  expect(strictEquals(1, 1)).toBe(1 === 1);
});
test('Compare NaN to Nan is false', () => {
  expect(strictEquals(NaN, NaN)).toBe(NaN === NaN);
});
test('Compare 0 to -0 is true', () => {
  expect(strictEquals(0, -0)).toBe(0 === -0);
});
test('Compare -0 to 0 is true', () => {
  expect(strictEquals(-0, 0)).toBe(-0 === 0);
});
test('Compare 1 to "1" is false', () => {
  expect(strictEquals(1, '1')).toBe(1 === '1');
});
test('Compare true to false is false', () => {
  expect(strictEquals(true, false)).toBe(true === false);
});
test('Compare false to false is true', () => {
  expect(strictEquals(false, false)).toBe(false === false);
});
test('Compare "Water" to "Oil" is false', () => {
  expect(strictEquals('Water', 'Oil')).toBe('Water' === 'Oil');
});
test('Compare "SkyLab" to "SkyLab" is true', () => {
  expect(strictEquals('SkyLab', 'SkyLab')).toBe('SkyLab' === 'SkyLab');
});

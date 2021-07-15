const strictEqual = (a, b) => {
  if (isNaN(a) && isNaN(b)) return false;
  if (isNaN(a / b) || isNaN(b / a)) return true;
  return Object.is(a, b);
};

test('Compare if 1 and 1 its true', () => {
  const result = strictEqual(1, 1);
  expect(result).toBe(true);
});

test('Compare if NaN and NaN its false', () => {
  const result = strictEqual(NaN, NaN);
  expect(result).toBe(false);
});

test('Compare if 0 and -0 its true', () => {
  const result = strictEqual(0, -0);
  expect(result).toBe(true);
});

test('Compare if -0 and 0 its true', () => {
  const result = strictEqual(-0, 0);
  expect(result).toBe(true);
});

test('Compare if 1 and "1" its false', () => {
  const result = strictEqual(1, '1');
  expect(result).toBe(false);
});

test('Compare if true and false its false', () => {
  const result = strictEqual(true, false);
  expect(result).toBe(false);
});

test('Compare if false and false its true', () => {
  const result = strictEqual(false, false);
  expect(result).toBe(true);
});

test('Compare if "water" and  "oil" its false', () => {
  const result = strictEqual('water', 'oil');
  expect(result).toBe(false);
});

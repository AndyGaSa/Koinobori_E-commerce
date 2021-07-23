// Challenge Pere Ripoll

const strictEqual = (a, b) => {
  if (Number.isNaN(a) && Number.isNaN(b)) return false;
  if (Number.isNaN(a / b) || Number.isNaN(b / a)) return true;
  return Object.is(a, b);
};

test('strictEqual function to compare 1 and 1 should return true', () => {
  const result = strictEqual(1, 1);
  expect(result).toBe(true);
});

test('strictEqual function to compare NaN and NaN should return false', () => {
  const result = strictEqual(NaN, NaN);
  expect(result).toBe(false);
});
test('strictEqual function to compare 0 and -0 should return true', () => {
  const result = strictEqual(0, -0);
  expect(result).toBe(true);
});
test('strictEqual function to compare -0 and 0 should return true', () => {
  const result = strictEqual(-0, 0);
  expect(result).toBe(true);
});
test('strictEqual function to compare 1 and \'1\' should return false', () => {
  const result = strictEqual(1, '1');
  expect(result).toBe(false);
});
test('strictEqual function to compare true and false should return false', () => {
  const result = strictEqual(true, false);
  expect(result).toBe(false);
});
test('strictEqual function to compare false and false should return true', () => {
  const result = strictEqual(false, false);
  expect(result).toBe(true);
});
test('strictEqual function to compare \'str\' and \'str\' should return false', () => {
  const result = strictEqual('water', 'oil');
  expect(result).toBe(false);
});

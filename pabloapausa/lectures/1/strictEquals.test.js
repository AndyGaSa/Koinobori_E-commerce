const strictEquals = function (a, b) {
  if (Number.isNaN(a) && Number.isNaN(b)) return false;
  if (Number.isNaN(a / b) || Number.isNaN(a / b)) return true;
  return Object.is(a, b);
};

test('0 is strictly equal to itself', () => {
  expect(strictEquals(0, 0)).toBe(true);
});

test('Exception: NaN is not strictly equal to another one', () => {
  expect(strictEquals(NaN, NaN)).toBe(false);
});

test('Exception: 0 is strictly equal to -0', () => {
  expect(strictEquals(0, -0)).toBe(true);
});

test('Exception: -0 is strictly equal to 0', () => {
  expect(strictEquals(-0, 0)).toBe(true);
});

test("0 is not strictly equal to '0'", () => {
  expect(strictEquals(1, '0')).toBe(false);
});

test("'true' is not strictly equal to 'false'", () => {
  expect(strictEquals(true, false)).toBe(false);
});

test('A boolean is strictly equal to itself', () => {
  expect(strictEquals(false, false)).toBe(true);
});

test('A string is not strictly equal to another one', () => {
  expect(strictEquals('Water', 'Oil')).toBe(false);
});

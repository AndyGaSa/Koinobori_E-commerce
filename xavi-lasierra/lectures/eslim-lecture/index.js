const strictEquals = (a, b) => {
  if (Object.is(a, NaN) && Object.is(b, NaN)) {
    return false;
  }
  if (Object.is(a, 0) && Object.is(b, -0)) {
    return true;
  }
  if (Object.is(a, -0) && Object.is(b, 0)) {
    return true;
  }
  return Object.is(a, b);
};

test('Function strictEquals of 1 and 1 is true', () => {
  expect(strictEquals(1, 1)).toBe(true);
});

test('Function strictEquals of NaN and NaN is false', () => {
  expect(strictEquals(NaN, NaN)).toBe(false);
});

test('Function strictEquals of 0 and -0 is true', () => {
  expect(strictEquals(0, -0)).toBe(true);
});

test('Function strictEquals of -0 and 0 is true', () => {
  expect(strictEquals(-0, 0)).toBe(true);
});

test("Function strictEquals of 1 and '1' is false", () => {
  expect(strictEquals(1, '1')).toBe(false);
});

test('Function strictEquals of true and false is false', () => {
  expect(strictEquals(true, false)).toBe(false);
});

test('Function strictEquals of false and false is true', () => {
  expect(strictEquals(false, false)).toBe(true);
});

test("Function strictEquals of 'Water' and 'oil' is false", () => {
  expect(strictEquals('Water', 'oil')).toBe(false);
});

test("Function strictEquals of 'a' and 'a' is false", () => {
  expect(strictEquals('a', 'a')).toBe(true);
});

test('Function strictEquals of {} and {} is false', () => {
  expect(strictEquals({}, {})).toBe(false);
});

test('Function strictEquals of function(){} and function(){} is false', () => {
  expect(strictEquals(() => {}, () => {})).toBe(false);
});

test('Function strictEquals of 0 and false is false', () => {
  expect(strictEquals(0, false)).toBe(false);
});

test('Function strictEquals of null and undefined is false', () => {
  expect(strictEquals(null, undefined)).toBe(false);
});

test('Function strictEquals of null and null is true', () => {
  expect(strictEquals(null, null)).toBe(true);
});

test('Function strictEquals of undefined and undefined is false', () => {
  expect(strictEquals(undefined, undefined)).toBe(true);
});

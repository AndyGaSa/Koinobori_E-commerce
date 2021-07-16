const { expect } = require('@jest/globals');

const SkylabArray = require('./arrays');

/**
 * GIVEN
 * WHEN
 * THEN
 * AND
 * OR
 */

test('should have a length equals to 0', () => {
  const myArray = new SkylabArray();
  expect(myArray.length).toBe(0);
});

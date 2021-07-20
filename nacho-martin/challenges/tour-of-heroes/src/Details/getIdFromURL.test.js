function mockGetIdFromURL(location) {
  const currentLocation = location;
  const slug = currentLocation.split('=');
  const [, id] = slug;
  return +id;
}

describe('Given a getId function', () => {
  describe('When called with a string', () => {
    test('Then it should return a number', () => {
      const tryOut = mockGetIdFromURL('?id=io');
      expect(typeof tryOut === 'number').toBe(true);
    });
    describe('And the string contains a valid id', () => {
      test('Then it should return a number different to NaN', () => {
        const tryOut = mockGetIdFromURL('?id=8');
        expect(typeof tryOut === 'number' && (!Number.isNaN(tryOut))).toBe(true);
      });
    });

    describe('And the string contains a valid id that values 8', () => {
      test('Then it should return 8', () => {
        const tryOut = mockGetIdFromURL('?id=8');
        expect(tryOut === 8).toBe(true);
      });
    });
  });
});

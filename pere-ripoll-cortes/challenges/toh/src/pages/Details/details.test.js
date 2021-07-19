const DetailsPage = require('./details.class');

describe('Give DetailsPage', () => {
  let page;

  describe('When an instance is created', () => {
    let properties;

    beforeEach(() => {
      page = new DetailsPage(11, [{ id: 11, name: 'Dr Nice' }]);
      properties = Object.keys(page);
    });

    test('Then should have id property', () => {
      expect(properties?.some((key) => key === 'id')).toBe(true);
    });

    test('Then should have name property', () => {
      expect(properties.some((key) => key === 'hero')).toBe(true);
    });
  });
});

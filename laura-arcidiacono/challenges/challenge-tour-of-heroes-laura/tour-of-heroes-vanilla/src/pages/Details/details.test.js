const DetailsPage = require('./details.class');

describe('Give a class DetailsPage', () => {
  let page;
  describe('When an instance is created', () => {
    let properties;

    beforeEach(() => {
      page = new DetailsPage(4);
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

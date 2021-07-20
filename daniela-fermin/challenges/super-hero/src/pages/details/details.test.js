const DetailsPage = require('./detailspage.class');

describe('Given a Details page', () => {
  let testDetailsPage;
  let properties;
  describe('When an instance is created', () => {
    beforeEach(() => {
      testDetailsPage = new DetailsPage('12', '1-a-bomb');
      properties = Object.keys(testDetailsPage);
    });
    test('Then the object should have a property id', () => {
      expect(properties.some((key) => key === 'id')).toBe(true);
    });
    test('Then the object should have a property slug', () => {
      expect(properties.some((key) => key === 'slug')).toBe(true);
    });
  });
});

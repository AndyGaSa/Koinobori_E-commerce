const DetailsPage = require('./details.class');

describe('Give DetailsPage', () => {
  let page;

  describe('When an instance is created', () => {
    let properties;

    beforeEach(() => {
      page = new DetailsPage([{ id: 11, name: 'Dr Nice' }]);
      properties = Object.keys(page);
    });

    test('Then should have hero property', () => {
      expect(properties.some((key) => key === 'hero')).toBe(true);
    });
  });
});

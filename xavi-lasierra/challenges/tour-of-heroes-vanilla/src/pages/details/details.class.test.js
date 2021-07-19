const DetailsPage = require('./details.class');

describe('Give DetailsPage', () => {
  let page;

  describe('When an instance is created', () => {
    let properties;

    beforeEach(() => {
      page = new DetailsPage('dc-superman', [{ id: 'dc-superman', superhero: 'Superman' }]);
      properties = Object.keys(page);
    });

    test('Then should have id property', () => {
      expect(properties?.some((key) => key === 'id')).toBe(true);
    });

    test('Then should have superhero property', () => {
      expect(properties.some((key) => key === 'hero')).toBe(true);
    });

    test('Then id property should be dc-superman', () => {
      expect(page.id).toBe('dc-superman');
    });

    test('Then hero.superhero property should be dc-superman', () => {
      expect(page.hero.superhero).toBe('Superman');
    });
  });
});

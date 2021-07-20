const DetailsPage = require('./details.class');

describe('Give DetailsPage', () => {
  let page;

  describe('When an instance is created', () => {
    let properties;

    describe('And id and slug is defined', () => {
      beforeEach(() => {
        page = new DetailsPage('1', '1-dc-superman', [{ id: '1', slug: '1-superman', name: 'Superman' }]);
        properties = Object.keys(page);
      });

      test('Then should have id property', () => {
        expect(properties?.some((key) => key === 'id')).toBe(true);
      });

      test('Then should have hero property', () => {
        expect(properties.some((key) => key === 'hero')).toBe(true);
      });

      test('Then should have slug property', () => {
        expect(properties.some((key) => key === 'slug')).toBe(true);
      });

      test('Then id property should be 1', () => {
        expect(page.id).toBe('1');
      });

      test('Then slug property should be 1-dc-superman', () => {
        expect(page.slug).toBe('1-dc-superman');
      });

      test('Then hero.name property should be Superman', () => {
        expect(page.hero.name).toBe('Superman');
      });
    });

    describe('And id is not defined', () => {
      beforeEach(() => {
        page = new DetailsPage(undefined, '1-dc-superman', [{ id: '1', slug: '1-dc-superman', name: 'Superman' }]);
        properties = Object.keys(page);
      });
      test('Then should have id property', () => {
        expect(properties?.some((key) => key === 'id')).toBe(true);
      });

      test('Then should have hero property', () => {
        expect(properties.some((key) => key === 'hero')).toBe(true);
      });

      test('Then should have slug property', () => {
        expect(properties.some((key) => key === 'slug')).toBe(true);
      });

      test('Then slug property should be 1-dc-superman', () => {
        expect(page.slug).toBe('1-dc-superman');
      });

      test('Then hero.name property should be Superman', () => {
        expect(page.hero.name).toBe('Superman');
      });
    });
  });
});

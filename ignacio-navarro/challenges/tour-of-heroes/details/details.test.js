const HeroDetailsClass = require('./hero.class');

describe('Given HeroDetailsClass', () => {
  let page;

  describe('When an instance is created', () => {
    let properties;

    beforeEach(() => {
      page = new HeroDetailsClass('dc-superman', [{ id: 'dc-superman', name: 'Dr Nice' }]);
      properties = Object.keys(page);
    });

    test('Then should have id property', () => {
      expect(properties?.some((key) => key === 'id')).toBe(true);
    });

    test('Then should have name property', () => {
      expect(properties.some((key) => key === 'name')).toBe(true);
    });
    test('Then should id should be 11', () => {
      expect(page.id).toEqual('dc-superman');
    });

    test('Then should have name property', () => {
      expect(page.name).toEqual('superman');
    });
  });
});

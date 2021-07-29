const HeroesPage = require('./heroes.class');

describe('Given HeroesPage', () => {
  let page;

  describe('When an instance is created', () => {
    let properties;

    beforeEach(() => {
      page = new HeroesPage([
        { id: '1', name: 'Batman' },
        { id: '2', name: 'Superman' },
        { id: '3', name: 'Flash' },
        { id: '4', name: 'Green Lantern' },
        { id: '5', name: 'Green Arrow' }
      ]);
      properties = Object.keys(page);
    });

    test('Then should have heroList property', () => {
      expect(properties?.some((key) => key === 'heroList')).toBe(true);
    });

    test('Then heroList[0].id  should be dc-superman', () => {
      expect(page.heroList[0].id).toBe('1');
    });

    test('Then heroList[3].name  should be Green Lantern', () => {
      expect(page.heroList[3].name).toBe('Green Lantern');
    });
  });
});

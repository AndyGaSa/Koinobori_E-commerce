const HeroesPage = require('./heroes.class');

describe('Given HeroesPage', () => {
  let page;

  describe('When an instance is created', () => {
    let properties;

    beforeEach(() => {
      page = new HeroesPage([
        { id: 'dc-batman', superhero: 'Batman' },
        { id: 'dc-superman', superhero: 'Superman' },
        { id: 'dc-flash', superhero: 'Flash' },
        { id: 'dc-green', superhero: 'Green Lantern' },
        { id: 'dc-arrow', superhero: 'Green Arrow' }
      ]);
      properties = Object.keys(page);
    });

    test('Then should have heroList property', () => {
      expect(properties?.some((key) => key === 'heroList')).toBe(true);
    });

    test('Then heroList[0].id  should be dc-superman', () => {
      expect(page.heroList[0].id).toBe('dc-batman');
    });

    test('Then heroList[3].superhero  should be Green Lantern', () => {
      expect(page.heroList[3].superhero).toBe('Green Lantern');
    });
  });
});

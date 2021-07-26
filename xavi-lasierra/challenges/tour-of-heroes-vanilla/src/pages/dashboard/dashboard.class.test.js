const DashboardPage = require('./dashboard.class');

describe('Give DashboardPage', () => {
  let page;

  describe('When an instance is created', () => {
    let properties;

    beforeEach(() => {
      page = new DashboardPage([
        { id: 'dc-batman', superhero: 'Batman' },
        { id: 'dc-superman', superhero: 'Superman' },
        { id: 'dc-flash', superhero: 'Flash' },
        { id: 'dc-green', superhero: 'Green Lantern' },
        { id: 'dc-arrow', superhero: 'Green Arrow' }
      ], 1, 4);
      properties = Object.keys(page);
    });

    test('Then should have heroDashBoardList property', () => {
      expect(properties?.some((key) => key === 'heroDashBoardList')).toBe(true);
    });

    test('Then heroDashBoardList[0].id  should be dc-superman', () => {
      expect(page.heroDashBoardList[0].id).toBe('dc-superman');
    });

    test('Then heroDashBoardList[3].superhero  should be Green Arrow', () => {
      expect(page.heroDashBoardList[3].superhero).toBe('Green Arrow');
    });
  });
});

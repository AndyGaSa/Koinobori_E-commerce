const DashboardPage = require('./dashboard.class');

describe('Give DashboardPage', () => {
  let page;

  describe('When an instance is created', () => {
    let properties;

    beforeEach(() => {
      page = new DashboardPage([
        { id: '1', superhero: 'Superman' },
        { id: '2', superhero: 'Flash' },
        { id: '3', superhero: 'Green Lantern' },
        { id: '4', superhero: 'Green Arrow' }
      ]);
      properties = Object.keys(page);
    });

    test('Then should have heroDashBoardList property', () => {
      expect(properties?.some((key) => key === 'heroDashBoardList')).toBe(true);
    });

    test('Then heroDashBoardList[0].id  should be dc-superman', () => {
      expect(page.heroDashBoardList[0].id).toBe('1');
    });

    test('Then heroDashBoardList[3].superhero  should be Green Arrow', () => {
      expect(page.heroDashBoardList[3].superhero).toBe('Green Arrow');
    });
  });
});

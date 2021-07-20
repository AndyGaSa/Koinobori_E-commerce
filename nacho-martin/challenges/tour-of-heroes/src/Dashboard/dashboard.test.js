const Dashboard = require('./dashboard.class');

describe('Given a dashboard class', () => {
  describe('When instanced with an array', () => {
    test('Then this.heroes should be an object', () => {
      const myDashboard = new Dashboard([]);
      expect(typeof myDashboard.heroes === 'object').toBe(true);
    });
  });
});

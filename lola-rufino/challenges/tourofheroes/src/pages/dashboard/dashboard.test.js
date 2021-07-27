const DashboardPage = require('./dashboard.class');

// GIVEN, WHEN, THEN

describe('Given a Dashboard', () => {
  describe('When an instance is created', () => {
    test('Then create an object', () => {
      // Arrange
      // Act
      const page = new DashboardPage([{ id: 11, name: 'Dr Nice' }]);
      // Assert
      expect(typeof page).toBe('object');
    });
  });
});

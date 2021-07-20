const detailsPage = require('./details.class');

describe('Given a details class', () => {
  describe('When instanced with a valid id and an array', () => {
    test('Then this.id should be equal to id', () => {
      const page = new detailsPage(5, []);
      expect(page.id === 5).toBe(true);
    });

    test('Then this.hero should be an element from the array with a property id equal to id', () => {
      const page = new detailsPage(6, [{ id: 6, name: 'John' }, {}]);
      expect(page.hero.id === 6).toBe(true);
    });
  });
});

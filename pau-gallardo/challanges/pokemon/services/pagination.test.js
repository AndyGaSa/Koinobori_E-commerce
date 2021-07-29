const { clearPokemons, printPokemons, changePage } = require('./pagination');

describe('Given clearPokemons', () => {
  describe('When is invoked', () => {
    test('Then shold return undefined', () => {
      global.document = {
        querySelector: jest.fn()
          .mockResolvedValue('asd'),
      };
      expect(clearPokemons()).toBe(undefined);
    });
  });
});

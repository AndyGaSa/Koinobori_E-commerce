const { getPokemons, getPokemonById } = require('./getpokemons');

describe('Given a getPokemons function', () => {
  describe('When is invoked', () => {
    describe('And the promise resolves', () => {
      test('Then should return an array.length = 1', () => {
        expect(heroes.length).toBe(1);
      });
    });
  });
});

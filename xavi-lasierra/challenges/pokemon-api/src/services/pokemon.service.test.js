global.localStorage = {
  getItem: jest.fn()
    .mockReturnValue(JSON.stringify([{ id: 1, name: 'bulbasaur' }]))
};

const { getPokemons } = require('./pokemon.service');

describe('Given a getPokemons function', () => {
  describe('When is invoked', () => {
    describe('And the promise resolves', () => {
      beforeEach(() => {
        global.fetch = jest.fn()
          .mockResolvedValue({
            json: jest.fn()
              .mockResolvedValue([{ id: 1, name: 'bulbasaur' }])
          });
      });
      test('Then should return an array.length = 1', () => getPokemons().then((pokemons) => {
        expect(pokemons.length).toBe(1);
      }));
      test('Then pokemons[0].name should be bulbasur', () => getPokemons().then((pokemons) => {
        expect(pokemons[0].name).toBe('bulbasaur');
      }));
    });
  });
});

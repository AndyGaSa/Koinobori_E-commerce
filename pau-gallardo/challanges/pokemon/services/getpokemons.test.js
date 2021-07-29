const { getPokemons, getPokemonById } = require('./getpokemons');

describe('Given getHeroById', () => {
  beforeEach(() => {
    global.localStorage = {
      getItem: jest.fn()
        .mockReturnValue(JSON.stringify([{ id: 11, name: 'Gerachu' }])),
    };
  });

  describe('When is resolved', () => {
    test('Then should return an object', () => getPokemonById(11).then((hero) => {
      expect(typeof hero).toBe('object');
    }));
    test('Then should return an object with name Gerachu', () => getPokemonById(11).then((pokemon) => {
      expect(pokemon.name).toBe('Gerachu');
    }));
    test('Then should return an object with id 11', () => getPokemonById(11).then((pokemon) => {
      expect(pokemon.id).toBe(11);
    }));
  });

  describe('When is rejected', () => {
    test('Then should catch an error message Algo ha ido mal', () => getPokemonById(12)
      .catch((error) => {
        expect(error.message).toBe('There is no hero with id: 12');
      }));
  });
});

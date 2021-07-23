const { getHeroes, getHeroById } = require('./hero.service');

describe('Given a getHeroes function', () => {
  describe('When is invoked', () => {
    describe('And the promise resolves', () => {
      test('Then should return an array.length = 1', () => {
        global.fetch = jest.fn()
          .mockResolvedValue({
            json: jest.fn()
              .mockResolvedValue([{ id: 11, name: 'Dr Nice' }]),
          });
        return getHeroes().then((heroes) => {
          expect(heroes.length).toBe(1);
        });
      });
    });
  });
});

describe('Given getHeroById', () => {
  beforeEach(() => {
    global.localStorage = {
      getItem: jest.fn()
        .mockReturnValue(JSON.stringify([{ id: 11, name: 'Dr Nice' }])),
    };
  });

  describe('When is resolved', () => {
    test('Then should return an object', () => getHeroById(11).then((hero) => {
      expect(typeof hero).toBe('object');
    }));
    test('Then should return an object with name Dr Nice', () => getHeroById(11).then((hero) => {
      expect(hero.name).toBe('Dr Nice');
    }));
    test('Then should return an object with id 11', () => getHeroById(11).then((hero) => {
      expect(hero.id).toBe(11);
    }));
  });

  describe('When is rejected', () => {
    test('Then should catch an error message Algo ha ido mal', () => getHeroById(12)
      .catch((error) => {
        expect(error.message).toBe('There is no hero with id: 12');
      }));
  });
});

const controller = require('./beersController');

describe('Given getBeers function', () => {
  describe('When it is invoked', () => {
    describe('And there are not filter queries', () => {
      test('Then should call res.send with beersMock as an argument', () => {
        const res = {
          send: jest.fn()
        };
        const req = { query: { } };
        controller.getBeers(req, res);

        expect(res.send).toHaveBeenCalled();
      });
    });
    describe('And there is a filter query beerName = ab:12', () => {
      test('Then should call res.send with an object with id = 7 as an argument', () => {
        const res = {
          send: jest.fn()
        };
        const req = { query: { beerName: 'ab:12' } };
        controller.getBeers(req, res);

        expect(res.send.mock.calls[0][0][0].id).toBe(7);
      });
    });
  });
});

describe('Given postBeer function', () => {
  describe('When it is invoked', () => {
    const res = { send: jest.fn() };
    const req = { body: { name: 'Leffe' } };
    controller.postBeer(req, res);

    test('Then should call res.send with an object with property id = 25 as an argument', () => {
      expect(res.send.mock.calls[0][0].id).toBe(26);
    });
    test('Then should call res.send with an object with property name = Leffe as an argument', () => {
      expect(res.send.mock.calls[0][0].name).toBe('Leffe');
    });
  });
});

describe('Given getOneBeer function', () => {
  describe('When it is invoked with parameter 1', () => {
    test('Then should call res.send with an object with property name = Leffe as an argument', () => {
      const res = { send: jest.fn() };
      const req = { params: { beerId: '1' } };
      controller.getOneBeer(req, res);
      expect(res.send.mock.calls[0][0].name).toBe('Buzz');
    });
  });

  describe('When it is invoked with parameter 26', () => {
    test('Then should call res.send with an object with property name = Leffe as an argument', () => {
      const res = { send: jest.fn() };
      const req = { params: { beerId: '26' } };
      controller.getOneBeer(req, res);
      expect(res.send.mock.calls[0][0].name).toBe('Leffe');
    });
  });

  describe('When it is invoked with parameter 99', () => {
    test('Then should call res.send with undefined', () => {
      const res = { send: jest.fn() };
      const req = { params: { beerId: '99' } };
      controller.getOneBeer(req, res);
      expect(res.send.mock.calls[0][0]).toBe(undefined);
    });
  });
});

describe('Given deleteOneBeer function', () => {
  describe('When it is invoked with parameter 2', () => {
    const res = { send: jest.fn() };
    const req = { params: { beerId: '2' } };
    controller.deleteOneBeer(req, res);

    test('Then should call res.send with an object that do not contains Trashy Blonde', () => {
      expect(res.send.mock.calls[0][0].some(({ name }) => name === 'Trashy Blonde')).toBe(false);
    });
  });
});

describe('Given updateBeer function', () => {
  describe('When it is invoked with parameter 6', () => {
    const res = { send: jest.fn() };
    const req = {
      params: { beerId: '6' },
      body: { name: 'Moritz' }
    };
    controller.updateBeer(req, res);

    test('Then should call res.send with an object that do not contains Buzz', () => {
      expect(res.send.mock.calls[0][0].some(({ name }) => name === 'Electric India')).toBe(false);
    });

    test('Then should call res.send with an object that contains Moritz', () => {
      expect(res.send.mock.calls[0][0].some(({ name }) => name === 'Moritz')).toBe(true);
    });
  });
});

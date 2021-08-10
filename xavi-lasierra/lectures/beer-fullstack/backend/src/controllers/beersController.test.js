const controller = require('./beersController');

describe('Given getBeers function', () => {
  describe('When it is invoked', () => {
    describe('And there are not filter queries', () => {
      test('Then should call res.send with beersMock as an argument', () => {
        const res = {
          send: jest.fn(),
          status: jest.fn()
        };
        const req = { query: { } };
        controller.getBeers(req, res);

        expect(res.send).toHaveBeenCalled();
      });
    });
    describe('And there is a filter query name = ab:12', () => {
      test('Then should call res.send with an object with id = 7 as an argument', () => {
        const res = {
          send: jest.fn(),
          status: jest.fn()
        };
        const req = { query: { name: 'ab:12' } };
        controller.getBeers(req, res);

        expect(res.send.mock.calls[0][0][0].id).toBe(7);
      });
    });
  });
});

describe('Given postBeer function', () => {
  describe('When it is invoked', () => {
    describe('And the requested beer name is not already in the api', () => {
      const res = {
        send: jest.fn(),
        status: jest.fn()
      };
      const req = { body: { name: 'Leffe' } };
      controller.postBeer(req, res);

      test('Then should call res.send with an object with property id = 25 as an argument', () => {
        expect(res.send.mock.calls[0][0].id).toBe(26);
      });
      test('Then should call res.send with an object with property name = Leffe as an argument', () => {
        expect(res.send.mock.calls[0][0].name).toBe('Leffe');
      });
    });
    describe('And the requested beer name is already in the api', () => {
      const res = {
        send: jest.fn(),
        status: jest.fn()
      };
      const req = { body: { name: 'Leffe' } };
      controller.postBeer(req, res);

      test('Then should call res.send with a new error with the message There is a beer with the same name: Leffe', () => {
        expect(res.send.mock.calls[0][0].message).toBe('There is a beer with the same name: Leffe');
      });
    });
  });
});

describe('Given getOneBeer function', () => {
  describe('When it is invoked with parameter 1', () => {
    test('Then should call res.send with an object with property name = Leffe as an argument', () => {
      const res = {
        send: jest.fn()
      };
      const req = { beer: { name: 'Buzz' } };
      controller.getOneBeer(req, res);
      expect(res.send.mock.calls[0][0].name).toBe('Buzz');
    });
  });
});

describe('Given deleteOneBeer function', () => {
  describe('When it is invoked with parameter 2', () => {
    const res = {
      send: jest.fn(),
      status: jest.fn()
    };
    const req = { params: { beerId: '2' } };
    controller.deleteOneBeer(req, res);

    test('Then should call res.status with a 204 argument', () => {
      expect(res.status.mock.calls[0][0]).toBe(204);
    });
  });
});

describe('Given updateBeer function', () => {
  describe('When it is invoked with parameter 6', () => {
    const res = {
      send: jest.fn(),
      status: jest.fn()
    };
    const req = {
      params: { beerId: '6' },
      body: { name: 'Moritz' }
    };
    controller.updateBeer(req, res);

    test('Then should call res.send with an object with the name Moritz', () => {
      expect(res.send.mock.calls[0][0].name).toBe('Moritz');
    });
  });
});

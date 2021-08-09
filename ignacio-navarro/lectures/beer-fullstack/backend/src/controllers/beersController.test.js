const controller = require('./beersController');

describe('Given a GetBeers function', () => {
  describe('When is invoked', () => {
    test('Should call res.send', () => {
      const res = { send: jest.fn() };
      controller.getBeers(null, res);
      expect(res.send).toHaveBeenCalled();
    });
  });
});

describe('Given a PostBeer function', () => {
  describe('When is invoked', () => {
    test('PostBeer > Should call res.send', () => {
      const req = { body: { name: 'testBeerName' } };
      const res = { send: jest.fn() };
      controller.postBeer(req, res);
      expect(res.send).toHaveBeenCalled();
    });
  });
});

describe('Given a UpadateBeer function', () => {
  describe('When is invoked', () => {
    test('Should call res.send', () => {
      const req = { params: { beerId: 11 } };
      const res = { send: jest.fn() };
      controller.updateBeer(req, res);
      expect(res.send).toHaveBeenCalled();
    });
  });
});

describe('Given a DeleteBeer function', () => {
  describe('When is invoked', () => {
    test('Should call res.send', () => {
      const req = { params: { beerId: 11 } };
      const res = { send: jest.fn() };
      controller.deleteBeer(req, res);
      expect(res.send).toHaveBeenCalled();
    });
  });
});

describe('Given a GetOneBeer function', () => {
  describe('When is invoked', () => {
    test('Should call res.send', () => {
      const req = { params: { beerId: 11 } };
      const res = { send: jest.fn() };
      controller.getOneBeer(req, res);
      expect(res.send).toHaveBeenCalled();
    });
  });
});

describe('Given a FilterBeer function', () => {
  describe('When is invoked', () => {
    test('PostBeer > Should call res.send', () => {
      const mockedReq = {
        query: {},
      };
      const req = mockedReq;
      req.query = '?beerId=Buzz';
      const res = { send: jest.fn() };
      controller.filterBeer(req, res);
      expect(res.send).toHaveBeenCalled();
    });
  });
});

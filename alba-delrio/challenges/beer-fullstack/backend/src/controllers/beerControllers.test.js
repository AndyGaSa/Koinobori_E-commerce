const controller = require('./beersControllers');

describe('Given a getBeer controller', () => {
  describe('And beerName is defined', () => {
    test('then getBeers Should call res.send', () => {
      const res = { send: jest.fn() };
      const req = { query: { beerName: 'judas' } };
      controller.getBeers(req, res);

      expect(res.send).toHaveBeenCalled();
    });
  });
  describe('And beerName is undefined', () => {
    test('then getBeers Should call res.send', () => {
      const res = { send: jest.fn() };
      const req = { query: { } };
      controller.getBeers(req, res);

      expect(res.send).toHaveBeenCalled();
    });
  });
});

describe('Given a postBeer controller', () => {
  test('then a new item should to be added', () => {
    const res = { send: jest.fn() };
    const req = { body: { name: 'morte subite', id: 26 } };
    controller.postBeer(req, res);
    expect(res.send.mock.calls[0][0].name).toBe('morte subite');
  });

  test('then the item id should be 27', () => {
    const res = { send: jest.fn() };
    const req = { body: { name: 'morte subite', id: 27 } };
    controller.postBeer(req, res);
    expect(res.send.mock.calls[0][0].id).toBe(27);
  });
});

describe('Given a getOneBeer controller', () => {
  test(' then getOneBeer Should call res.send', () => {
    const res = { send: jest.fn() };
    const req = { params: { beerId: 11 } };

    controller.getOneBeer(req, res);

    expect(res.send).toHaveBeenCalled();
  });
});

describe('Given a updateOneBeer', () => {
  test('then send an item named buzzy', () => {
    const req = { params: { beerId: 1 }, body: { name: 'Buzzy' } };
    const res = { send: jest.fn() };
    controller.updateOneBeer(req, res);

    expect(res.send.mock.calls[0][0][0].name).toBe('Buzzy');
  });
});

describe('Given a deleteOneBeer', () => {
  test('then send the array without the deleted item', () => {
    const res = { send: jest.fn() };
    const req = { params: { beerId: 1 } };
    controller.deleteOneBeer(req, res);

    expect(res.send.mock.calls[0][0].some(({ id }) => id === 1)).toBe(false);
  });
});

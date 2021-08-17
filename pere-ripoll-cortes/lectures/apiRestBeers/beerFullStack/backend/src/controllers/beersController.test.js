const controller = require('./beersController');

test('GetBeers > Should call res.send', () => {
  const res = { send: jest.fn() };
  controller.getBeers(null, res);
  expect(res.send).toHaveBeenCalled();
});

test('getOneBeer > should call res.send', () => {
  const req = { params: { beerId: 11 } };
  const res = { send: jest.fn() };

  controller.getOneBeer(req, res);

  expect(res.send).toHaveBeenCalled();
});

describe('Given a post function', () => {
  const req = { body: { name: 'Buzz' } };
  const res = { send: jest.fn() };

  controller.postBeer(req, res);

  test('postBeer > should call res.send', () => {
    expect(res.send).toHaveBeenCalled();
  });

  test('postBeer > should return Buzz', () => {
    expect(res.send.mock.calls[0][0].name).toBe('Buzz');
  });
});

describe('Given a delete function', () => {
  const req = { body: { name: 'Buzz' } };
  const res = { send: jest.fn() };

  controller.deleteBeer(req, res);

  test('deleteBeer > should call res.send', () => {
    expect(res.send).toHaveBeenCalled();
  });

  test('deleteBeer should not return Buzz in array', () => {
    expect(res.send.mock.calls[0][0][0].name).not.toBe('Buzz');
  });
});

describe('Given a PUT function', () => {
  const req = { body: { name: 'Pilsen Lager', newName: 'NewPilsen Lager' } };
  const res = { send: jest.fn() };

  controller.putBeer(req, res);

  test('putBeer > should call res.send', () => {
    expect(res.send).toHaveBeenCalled();
  });

  test('putBeer should change the Buzz beer name to newBuzz', () => {
    const value = res.send.mock.calls[0][0][0].find((e) => e.name === 'NewPilsen Lager');
    expect(value.name).toBe('NewPilsen Lager');
  });
});

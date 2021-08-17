const gnomeController = require('./gnomeController');
const Gnome = require('../models/gnomeModels');

jest.mock('../models/gnomeModels');
let req;
let res;
describe('Given a getAll function', () => {
  describe('When getAll is invoked with valid arguments', () => {
    test('Then res.json() should be called', async () => {
      req = {
        body: {}
      };
      res = {
        json: jest.fn(),
        status: jest.fn(),
        send: jest.fn()
      };
      Gnome.find.mockResolvedValue([]);

      await gnomeController.getAll(req, res);
      expect(res.json).toHaveBeenCalled();
    });
  });
});
describe('Given a createOne function', () => {
  describe('When createOne is invoked', () => {
    beforeEach(() => {
      req = {
        body: {}
      };
      res = {
        json: jest.fn(),
        status: jest.fn(),
        send: jest.fn()
      };
    });
    test('Then res.send should be called with 500 ', async () => {
      Gnome.create.mockResolvedValue({ gnome: 'Pepa' });

      await gnomeController.createOne(req, res);

      expect(res.json).toHaveBeenCalledWith({ gnome: 'Pepa' });
    });
    test('Then res.send should be called with 500 ', async () => {
      Gnome.create.mockRejectedValue(new Error('No gnomes found'));

      await gnomeController.createOne(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.send.mock.calls[0][0].message).toBe('No gnomes found');
    });
  });
});

describe('Given a getOne function', () => {
  describe('When invoked', () => {
    beforeEach(() => {
      req = {
        params: { gnomeId: '611b942cad0f7443b35805c7' }
      };
      res = {
        json: jest.fn(),
        status: jest.fn(),
        send: jest.fn()
      };
    });

    test('Then send.json should be called once', async () => {
      Gnome.findById.mockReturnValue({
        populate: jest.fn().mockReturnValue({
          populate: jest.fn().mockResolvedValue({
            name: 'pepe',
            friends: [{ name: 'lola' }],
            adversaries: [{ name: 'nacho' }]
          })
        })
      });

      await gnomeController.getOne(req, res);
      expect(res.json).toHaveBeenCalled();
    });
  });
});

describe('Given an updateOne function', () => {
  describe('When is invoked', () => {
    test('Then res.json should be called with gnomeToUpdate', async () => {
      req = {
        params: {
          gnomeId: '611b942cad0f7443b35805c7'
        },
        body: {}
      };
      res = {
        json: jest.fn(),
        send: jest.fn(),
        status: jest.fn()
      };

      Gnome.findByIdAndUpdate.mockResolvedValue({});

      await gnomeController.updateOne(req, res);
      expect(res.json).toHaveBeenCalled();
    });
  });
});

describe('Given a deleteOne function', () => {
  describe('When is invoked', () => {
    test('Then res.json should been called', async () => {
      req = {
        params: {
          gnomeId: '611b942cad0f7443b35805c7'
        },
        body: {}
      };
      res = {
        json: jest.fn(),
        send: jest.fn(),
        status: jest.fn()

      };
      Gnome.findByIdAndDelete.mockResolvedValue({});
      await gnomeController.deleteOne(req, res);
      expect(res.json).toHaveBeenCalled();
    });
  });
});

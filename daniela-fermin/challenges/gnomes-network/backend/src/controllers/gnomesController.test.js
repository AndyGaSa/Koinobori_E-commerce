const Gnome = require('../models/gnomesModel');
const gnomesController = require('./gnomesController');

jest.mock('../models/gnomesModel');
let req;
let res;
describe('Given createOne ', () => {
  beforeEach(() => {
    req = { body: {} };
    res = {
      status: jest.fn(),
      send: jest.fn(),
      json: jest.fn()
    };
  });
  describe('When is triggered', () => {
    describe('And create is resolved', () => {
      test('Then res.json is called', async () => {
        Gnome.create.mockResolvedValue([{ name: 'Pepe' }]);
        await gnomesController.createOne(req, res);
        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And create is rejected', () => {
      test('Then res.status to be called with 500', async () => {
        Gnome.create.mockRejectedValue({});
        await gnomesController.createOne(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });
});
describe('Given getAll ', () => {
  describe('When is triggered', () => {
    beforeEach(() => {
      req = { body: {} };
      res = {
        status: jest.fn(),
        send: jest.fn(),
        json: jest.fn()
      };
    });
    describe('And find is resolved', () => {
      test('Then call json', async () => {
        Gnome.find.mockResolvedValue([{ }]);
        await gnomesController.getAll(req, res);
        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And find is rejected', () => {
      test('Then call send', async () => {
        Gnome.find.mockRejectedValue([{}]);
        await gnomesController.getAll(req, res);
        expect(res.send).toHaveBeenCalled();
      });
    });
  });
});

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

describe('Given getOne', () => {
  beforeEach(() => {
    req = { query: {} };
    res = {
      status: jest.fn(),
      send: jest.fn(),
      json: jest.fn()
    };
  });
  describe('When is triggered', () => {
    describe('And findOne is resolved', () => {
      test('Then res.json is called', async () => {
        Gnome.findOne.mockResolvedValue([{ name: 'Pepe' }]);
        await gnomesController.getOne(req, res);
        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And findOne is rejected', () => {
      test('Then res.status to be called with 500', async () => {
        Gnome.findOne.mockRejectedValue({});
        await gnomesController.getOne(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });
});

describe('Given updateOne', () => {
  beforeEach(() => {
    req = { query: {} };
    res = {
      status: jest.fn(),
      send: jest.fn(),
      json: jest.fn()
    };
  });
  describe('When is triggered', () => {
    describe('And finOneAndUpdate is resolved', () => {
      test('Then res.json is called', async () => {
        Gnome.findOneAndUpdate.mockResolvedValue([{ name: 'Pepe' }]);
        await gnomesController.updateOne(req, res);
        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And findOneAndUpdate is rejected', () => {
      test('Then res.send is called with CREATE_ERROR', async () => {
        Gnome.findOneAndUpdate.mockRejectedValue(new Error('CREATE_ERROR'));
        await gnomesController.updateOne(req, res);

        expect(res.send.mock.calls[0][0].message).toBe('CREATE_ERROR');
      });
    });
  });
});
describe('Given deleteOne', () => {
  beforeEach(() => {
    req = { query: {} };
    res = {
      status: jest.fn(),
      send: jest.fn(),
      json: jest.fn()
    };
  });
  describe('When is triggered', () => {
    describe('And finOneAndDelete is resolved', () => {
      test('Then res.json is called', async () => {
        Gnome.findOneAndDelete.mockResolvedValue([{ name: 'Pepe' }]);
        await gnomesController.deleteOne(req, res);
        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And findOneAndDelete is rejected', () => {
      test('Then res.send is called with CREATE_ERROR', async () => {
        Gnome.findOneAndDelete.mockRejectedValue({});
        await gnomesController.deleteOne(req, res);

        expect(res.send).toHaveBeenCalled();
      });
    });
  });
});

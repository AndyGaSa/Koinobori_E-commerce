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
    req = { params: { gnomeId: 57 } };
    res = {
      status: jest.fn(),
      send: jest.fn(),
      json: jest.fn()
    };
  });
  describe('When is triggered', () => {
    describe('And findById is resolved', () => {
      test('Then res.json is called', async () => {
        Gnome.findById.mockReturnValue({
          populate:
          jest.fn().mockReturnValue({
            populate:
            jest.fn().mockResolvedValue({})
          })
        });
        await gnomesController.getOne(req, res);
        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And findById is rejected', () => {
      test('Then res.status to be called with 500', async () => {
        Gnome.findById.mockReturnValue({
          populate:
          jest.fn().mockReturnValue({
            populate:
            jest.fn().mockRejectedValue({})
          })
        });
        await gnomesController.getOne(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });
});

describe('Given updateOne', () => {
  beforeEach(() => {
    req = { params: { gnomeId: {} } };
    res = {
      status: jest.fn(),
      send: jest.fn(),
      json: jest.fn()
    };
  });
  describe('When is triggered', () => {
    describe('And findByIdAndUpdate is resolved', () => {
      test('Then res.json is called', async () => {
        Gnome.findByIdAndUpdate.mockResolvedValue([{ name: 'Pepe' }]);
        await gnomesController.updateOne(req, res);
        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And findOneAndUpdate is rejected', () => {
      test('Then res.send is called with CREATE_ERROR', async () => {
        Gnome.findByIdAndUpdate.mockRejectedValue(new Error('CREATE_ERROR'));
        await gnomesController.updateOne(req, res);

        expect(res.send.mock.calls[0][0].message).toBe('CREATE_ERROR');
      });
    });
  });
});
describe('Given deleteOne', () => {
  beforeEach(() => {
    req = { params: { gnomeId: {} } };
    res = {
      status: jest.fn(),
      send: jest.fn(),
      json: jest.fn()
    };
  });
  describe('When is triggered', () => {
    describe('And findByIdAndDelete is resolved', () => {
      test('Then res.json is called', async () => {
        Gnome.findByIdAndDelete.mockResolvedValue([{ name: 'Pepe' }]);
        await gnomesController.deleteOne(req, res);
        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And findByIdAndDelete is rejected', () => {
      test('Then res.send is called', async () => {
        Gnome.findByIdAndDelete.mockRejectedValue({});
        await gnomesController.deleteOne(req, res);

        expect(res.send).toHaveBeenCalled();
      });
    });
  });
});

const {
  getGnomes,
  createGnome,
  getGnomeById,
  deleteGnomeById,
  updateGnomeById
} = require('./gnomes.controller');
const Gnome = require('../models/gnome.model');

jest.mock('../models/gnome.model');
let req;
let res;

describe('Given a getGnomes function', () => {
  describe('When it is triggered', () => {
    describe('And find is resolved', () => {
      test('Then res.json should be called', async () => {
        req = { query: {} };
        res = { json: jest.fn() };
        Gnome.find.mockReturnValue({
          populate: jest.fn().mockReturnValue({
            populate: jest.fn().mockResolvedValue([])
          })
        });

        await getGnomes(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });

    describe('And find is rejected', () => {
      beforeEach(async () => {
        req = { query: {} };
        res = {
          send: jest.fn(),
          status: jest.fn()
        };
        Gnome.find.mockReturnValue({
          populate: jest.fn().mockReturnValue({
            populate: jest.fn().mockRejectedValue(new Error('Could not find'))
          })
        });

        await getGnomes(req, res);
      });

      test('Then res.send should have been called with an error "Could not find"', () => {
        expect(res.send.mock.calls[0][0].message).toBe('Could not find');
      });

      test('Then res.status should have been called with 500', () => {
        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });
});

describe('Given a createGnome function', () => {
  describe('When it is triggered', () => {
    describe('And create is resolved', () => {
      test('Then res.json should be called', async () => {
        req = { body: {} };
        res = { json: jest.fn() };
        Gnome.create.mockResolvedValue({});

        await createGnome(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });

    describe('And create is rejected', () => {
      beforeEach(async () => {
        req = { query: {} };
        res = {
          send: jest.fn(),
          status: jest.fn()
        };
        Gnome.create.mockRejectedValue(new Error('Could not create'));

        await createGnome(req, res);
      });

      test('Then res.send should have been called with an error "Could not create"', () => {
        expect(res.send.mock.calls[0][0].message).toBe('Could not create');
      });

      test('Then res.status should have been called with 500', () => {
        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });
});

describe('Given a getGnomeById function', () => {
  describe('When it is triggered', () => {
    describe('And findById is resolved', () => {
      test('Then res.json should be called', async () => {
        req = { params: { gnomeId: '1' } };
        res = { json: jest.fn() };
        Gnome.findById.mockResolvedValue({});

        await getGnomeById(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });

    describe('And findById is rejected', () => {
      beforeEach(async () => {
        req = { params: { gnomeId: '1' } };
        res = {
          send: jest.fn(),
          status: jest.fn()
        };
        Gnome.findById.mockRejectedValue(new Error('Could not find'));

        await getGnomeById(req, res);
      });

      test('Then res.send should have been called with an error "Could not find"', () => {
        expect(res.send.mock.calls[0][0].message).toBe('Could not find');
      });

      test('Then res.status should have been called with 500', () => {
        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });
});

describe('Given a deleteGnomeById function', () => {
  describe('When it is triggered', () => {
    describe('And findByIdAndDelete is resolved', () => {
      test('Then res.send should be called with no arguments', async () => {
        req = { params: { gnomeId: '1' } };
        res = {
          send: jest.fn(),
          status: jest.fn()
        };
        Gnome.findByIdAndDelete.mockResolvedValue();

        await deleteGnomeById(req, res);

        expect(res.send).toHaveBeenCalledWith();
      });
    });

    describe('And findByIdAndDelete is rejected', () => {
      beforeEach(async () => {
        req = { params: { gnomeId: '1' } };
        res = {
          send: jest.fn(),
          status: jest.fn()
        };
        Gnome.findByIdAndDelete.mockRejectedValue(new Error('Could not delete'));

        await deleteGnomeById(req, res);
      });

      test('Then res.send should have been called with an error "Could not delete"', () => {
        expect(res.send.mock.calls[0][0].message).toBe('Could not delete');
      });

      test('Then res.status should have been called with 500', () => {
        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });
});

describe('Given a updateGnomeById function', () => {
  describe('When it is triggered', () => {
    describe('And findByIdAndUpdate is resolved', () => {
      test('Then res.send should be called with no arguments', async () => {
        req = { params: { gnomeId: '1' } };
        res = { json: jest.fn() };
        Gnome.findByIdAndUpdate.mockResolvedValue();

        await updateGnomeById(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });

    describe('And findByIdAndUpdate is rejected', () => {
      beforeEach(async () => {
        req = { params: { gnomeId: '1' } };
        res = {
          send: jest.fn(),
          status: jest.fn()
        };
        Gnome.findByIdAndUpdate.mockRejectedValue(new Error('Could not update'));

        await updateGnomeById(req, res);
      });

      test('Then res.send should have been called with an error "Could not update"', () => {
        expect(res.send.mock.calls[0][0].message).toBe('Could not update');
      });

      test('Then res.status should have been called with 500', () => {
        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });
});

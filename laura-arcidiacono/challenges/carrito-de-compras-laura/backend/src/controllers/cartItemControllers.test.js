// const Cart = require('../models/cartItemModel');
// const controllers = require('./cartItemControllers');

// jest.mock('../models/cartItemModel');

// describe('Given a getAll function', () => {
//   describe('When is triggered', () => {
//     test('Then call json', async () => {
//       const req = {
//         query: jest.fn()
//       };
//       const res = {
//         send: jest.fn(),
//         status: jest.fn(),
//         json: jest.fn()
//       };

//       Cart.find.mockResolvedValue({}).populate.mockResolvedValue(req)
//         .populate.mockResolvedValue(req);

//       await controllers.getAll(req, res);

//       expect(res.json).toHaveBeenCalled();
//     });
//   });
// });

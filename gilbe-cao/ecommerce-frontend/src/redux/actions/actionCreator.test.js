import axios from 'axios';
import { payProducts } from './actionCreator';
import actionTypes from './actionTypes';

jest.mock('axios');

describe('Give payProducts function', () => {
  describe('When is invoked', () => {
    describe('And resolves', () => {
      test('Then should call dispatch', async () => {
        const dispatch = jest.fn();
        axios.post.mockResolvedValue({ data: [] });

        await payProducts()(dispatch);

        expect(dispatch).toHaveBeenCalledWith({
          type: actionTypes.PAY_PRODUCTS,
          products: [],
        });
      });
    });
    describe('And rejects', () => {
      test('Then should call dispatch', async () => {
        const dispatch = jest.fn();
        axios.post.mockRejectedValue(new Error('There was an error'));

        await payProducts()(dispatch);

        expect(dispatch).toHaveBeenCalledWith({
          type: actionTypes.PRODUCT_API_ERROR,
          products: [],
        });
      });
    });
  });
});

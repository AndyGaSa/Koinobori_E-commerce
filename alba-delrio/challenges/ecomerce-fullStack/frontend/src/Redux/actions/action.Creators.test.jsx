import axios from 'axios';
import loadArticles from './actionCreators';

jest.mock('axios');
describe('Give loadArticles function', () => {
  describe('When is invoked', () => {
    describe('Add resolves', () => {
      test('Then should call dispatch', async () => {
        const dispatch = jest.fn();
        axios.get.mockResolvedValue({ data: [] });

        await loadArticles()(dispatch);
        expect(dispatch).toHaveBeenCalled();
      });
    });
  });
});

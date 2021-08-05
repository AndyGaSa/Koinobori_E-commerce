import React from 'react';
import Detail from './Detail';
import { render, screen } from '../utils/test-utils';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    comicId: '93839'
  })
}));
describe('given a Detail component', () => {
  describe('When there are  Detail', () => {
    test('Then create img should be in the document', () => {
      const initialState = {
        comics: [
          {
            id: 93839,
            digitalId: 0,
            title: 'Deadpool: Black, White & Blood (2021) #1',
            issueNumber: 1,
            variantDescription: '',
            description: null,
            modified: '2021-06-08T09:23:12-0400',
            isbn: '',
            upc: '75960620135800111',
            diamondCode: 'JUN210567',
            ean: '',
            issn: '',
            format: 'Comic'
          }]
      };
      render(
        <Detail />, { initialState }
      );
      expect(screen.getByTestId('list-item-93839')).toBeInTheDocument();
    });
  });
});

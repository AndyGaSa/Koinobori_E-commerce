import React from 'react';
import Details from './Details';
import { screen, render } from '../utils/test.utils';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    category: 'shorts',
    id: '1'
  })
}));

describe('Given a Details component', () => {
  const initialState = { stock: { clothes: { shorts: [{ id: '1' }] } } };

  const myInitialState = { imageDetails: 'hola.png' };

  React.useState = jest.fn().mockReturnValue([myInitialState, {}]);

  beforeEach(() => {
    render(<Details />, { initialState });
  });

  test('Then ADD TO CART should be in the document', () => {
    expect(screen.getByRole(/btnAddToCart/i)).toBeInTheDocument();
  });
  test('Then Tax included should be in the document', () => {
    expect(screen.queryByText(/Tax included/i)).toBeInTheDocument();
  });
  test('Should render a li element once stock is ready', () => {
    expect(screen.getByTestId('li-test')).toBeInTheDocument();
  });
});

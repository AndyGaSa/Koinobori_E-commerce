import React from 'react';
import Details from './Details';
import { screen, render } from '../utils/test.utils';

describe('Given a Details component', () => {
  const stockList = { imageDetails: 'prueba.png' };
  beforeEach(() => {
    render(<Details />);
  });

  test('Then ADD TO CART should be in the document', () => {
    expect(screen.getByRole(/btnAddToCart/i)).toBeInTheDocument();
  });
  test('Then Tax included should be in the document', () => {
    expect(screen.queryByText(/Tax included/i)).toBeInTheDocument();
  });
  test('Should render an image', () => {
    expect(screen.getByTestId('image-test')).toBeInTheDocument();
  });
});

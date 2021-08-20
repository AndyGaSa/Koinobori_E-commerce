import React from 'react';
import Home from './Home';
import { render, screen } from '../../utils/testUtils';
import beersMock from '../../Mock/beersMock';
import { loadProducts, loadUser } from '../../redux/actions/actionCreator';
import actionTypes from '../../redux/actions/actionTypes';

jest.mock('../../redux/actions/actionCreator');

describe('Given an Home page', () => {
  describe('When first loaded', () => {
    describe('And there is products', () => {
      test('Then render beers in the document', () => {
        loadUser.mockReturnValue({
          type: actionTypes.LOAD_USER,
          data: '61191abd00a361185ee43629',
        });
        loadProducts.mockReturnValue({
          type: actionTypes.LOAD_PRODUCTS,
          data: beersMock,
        });
        render(<Home />);
        expect(screen.getByText('Buzz')).toBeInTheDocument();
      });
    });
    describe('And there is no products', () => {
      test('Then render beers in the document', () => {
        loadUser.mockReturnValue({
          type: actionTypes.LOAD_USER,
          data: '61191abd00a361185ee43629',
        });
        loadProducts.mockReturnValue({
          type: actionTypes.LOAD_PRODUCTS,
          data: [],
        });
        render(<Home />);
        expect(screen.queryByText('Buzz')).toBe(null);
      });
    });
  });
});

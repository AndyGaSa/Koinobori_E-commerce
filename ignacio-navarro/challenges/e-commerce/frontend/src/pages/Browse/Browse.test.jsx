import React from 'react';
import Browse from './Browse';
import { render, screen } from '../../utils/testUtils';
import beersMock from '../../Mock/beersMock';
import { loadProducts } from '../../redux/actions/actionCreator';
import actionTypes from '../../redux/actions/actionTypes';

jest.mock('../../redux/actions/actionCreator');

describe('Given an Browse page', () => {
  describe('When first loaded', () => {
    describe('And there is products', () => {
      test('Then render beers in the document', () => {
        loadProducts.mockReturnValue({
          type: actionTypes.LOAD_PRODUCTS,
          data: beersMock,
        });
        render(<Browse />);
        expect(screen.getByText('Buzz')).toBeInTheDocument();
      });
    });
    describe('And there is no products', () => {
      test('Then render beers in the document', () => {
        loadProducts.mockReturnValue({
          type: actionTypes.LOAD_PRODUCTS,
          data: [],
        });
        render(<Browse />);
        expect(screen.queryByText('Buzz')).toBe(null);
      });
    });
  });
});

import React from 'react';
import All from './All';
import { render, screen } from '../../utils/testUtils';
import beersMock from '../../Mock/beersMock';
import { loadProducts } from '../../redux/actions/actionCreator';
import actionTypes from '../../redux/actions/actionTypes';

jest.mock('../../redux/actions/actionCreator');

describe('Given an All page', () => {
  describe('When first loaded', () => {
    describe('And there is products', () => {
      test('Then render beers in the document', () => {
        loadProducts.mockReturnValue({
          type: actionTypes.LOAD_PRODUCTS,
          data: beersMock,
        });
        render(<All />);
        expect(screen.getByText('Buzz')).toBeInTheDocument();
      });
    });
    describe('And there is no products', () => {
      test('Then render beers in the document', () => {
        loadProducts.mockReturnValue({
          type: actionTypes.LOAD_PRODUCTS,
          data: [],
        });
        render(<All />);
        expect(screen.queryByText('Buzz')).toBe(null);
      });
    });
  });
});

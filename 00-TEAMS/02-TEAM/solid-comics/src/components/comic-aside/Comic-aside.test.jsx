import React from 'react';
import { fireEvent, render, screen } from '../../utils/test-utils';
import FilterTop from '../filterTop/FilterTop';

describe('Given the filter aside component', () => {
  // configurar un elemento del DOM como objetivo del renderizado
  const initialState = {
    comics: [
      {
        id: 94485,
        title: 'avengers of the Galaxy (2020) #14 (Variant)',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/a/10/6092ed44dee79',
          extension: 'jpg'
        }
      },
      {
        id: 94604,
        title: 'x-men (2020) #13 (Variant)',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/30/6092ed7d03d60',
          extension: 'jpg'
        }
      },
      {
        id: 79807,
        title: 'fantastic (2020) #10',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/a/03/608990b337e41',
          extension: 'jpg'
        }
      }],
    filter: [
    ]
  };
  render(<FilterTop />, { initialState });
  describe('When type something on input', () => {
    const filterShow = screen.getByTestId('show-aside');
    fireEvent.click(filterShow);
    describe('And it is only spaces', () => {
      test('Then function filter should return nothing', () => {
        const filterInput = screen.getByTestId('filter-input-field');
        fireEvent.change(filterInput, { target: { value: '   ' } });
        expect(screen.getByAltText('avengers of the Galaxy (2020) #14 (Variant)')).toBeInTheDocument();
      });
    });
    describe('And avengers button is clicked', () => {
      const avengers = screen.getByTestId('avengers');
      fireEvent.click(avengers);
      test('Then function filter should return avengers', () => {
        render(<FilterTop />, { initialState });
        expect(screen.getByAltText('avengers of the Galaxy (2020) #14 (Variant)')).toBeInTheDocument();
      });
    });
    describe('And xmen button is clicked', () => {
      const xmen = screen.getByTestId('x-men');
      fireEvent.click(xmen);
      test('Then function filter should return xmen', () => {
        render(<FilterTop />, { initialState });
        expect(screen.getByAltText('x-men (2020) #13 (Variant)')).toBeInTheDocument();
      });
    });
    describe('And fantastic button is clicked', () => {
      const fantastic = screen.getByTestId('fantastic');
      fireEvent.click(fantastic);
      test('Then function filter should return fantastic', () => {
        render(<FilterTop />, { initialState });
        expect(screen.getByAltText('fantastic (2020) #10')).toBeInTheDocument();
      });
    });
  });
});

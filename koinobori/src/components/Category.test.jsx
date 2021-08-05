import React from 'react';
import Category from './Category';
import { screen, render } from '../utils/test.utils';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    category: 'shorts'
  })
}));

describe('Given a Category component', () => {
  test('Then a h2 should be in the document', () => {
    const initialState = { stock: { clothes: { shorts: [] } } };
    render(
      <Category />, { initialState }
    );
    expect(screen.getByTestId('shorts')).toBeInTheDocument();
  });
});

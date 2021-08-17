import React from 'react';
import { render, screen } from '../../utils/testUtils';
import Header from './Header';

beforeEach(() => {
  render(<Header />);
});

describe('Given a Header component', () => {
  describe('When is rendered', () => {
    test('Then h1 will be in the document', () => {
      expect(screen.getByTestId('header__title')).toBeInTheDocument();
    });
    test('And the value will be Este es el Header', () => {
      const titleH2 = screen.getByTestId('header__title');
      expect(titleH2.textContent).toBe('Este es el Header');
    });
  });
});

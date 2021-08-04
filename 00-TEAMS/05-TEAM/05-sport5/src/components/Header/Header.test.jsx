import React from 'react';
import { render, screen } from '../../utils/test.utils';
import Header from './Header';

describe('Given a Header component', () => {
  describe('When it is rendered', () => {
    beforeEach(() => {
      render(
        <Header />
      );
    });

    test('Then should render the title "Sport5"', () => {
      expect(screen.getByText(/Sport5/i)).toBeInTheDocument();
    });

    test('Then should have a button with dataid "side-menu-button"', () => {
      expect(screen.getByTestId('side-menu-button')).toBeInTheDocument();
    });
  });
});

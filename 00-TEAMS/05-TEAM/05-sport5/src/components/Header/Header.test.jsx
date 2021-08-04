import React from 'react';

import Header from './Header';

import { fireEvent, render, screen } from '../../utils/test.utils';

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

    describe('And side menu button is clicked when it is closed', () => {
      beforeEach(() => {
        const sideMenuButton = screen.getByTestId('side-menu-button');
        fireEvent.click(sideMenuButton);
      });

      test('Then side-menu class should contain side-menu--active', () => {
        expect(screen.getByTestId('side-menu').className).toContain('side-menu--active');
      });

      test('Then if the button is clicked again side-menu class should be side-menu', () => {
        const sideMenuButton = screen.getByTestId('side-menu-button');
        fireEvent.click(sideMenuButton);
        expect(screen.getByTestId('side-menu').className).toBe('side-menu');
      });
    });
  });
});

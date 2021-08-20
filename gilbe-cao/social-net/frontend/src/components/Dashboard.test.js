/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Dashboard from './Dashboard';
import { screen, render, fireEvent } from '../utils/testUltils';
import preloadedState from '../constants/preloadedState';
import { loadUsers, logout } from '../redux/actions/actionCreators';

jest.mock('../redux/actions/actionCreators');

describe('Given Dashboard component', () => {
  describe('When is rendered', () => {
    beforeEach(() => {
      loadUsers.mockReturnValue({ type: '' });
      logout.mockReturnValue({ type: '' });

      render(<Dashboard />, { preloadedState });
    });

    test('Then render Friends', () => {
      expect(screen.getByText(/Friends/i)).toBeInTheDocument();
    });

    test('Then render Adversaries', () => {
      expect(screen.getByText(/Adversaries/i)).toBeInTheDocument();
    });

    test('Then render My neighbours', () => {
      expect(screen.getByText(/My neighbours/i)).toBeInTheDocument();
    });

    test('Then call logout', () => {
      const logoutButton = screen.getByTestId('logout-button');
      fireEvent.click(logoutButton);

      expect(logout).toHaveBeenCalled();
    });
  });
});

/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch } from 'react-redux';
import { render, screen } from '../../utils/test.utils';

import Header from './Header';

import userMock from '../../mocks/user.mock';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn()
}));
jest.mock('@auth0/auth0-react');

describe('Given a Header component', () => {
  describe('When is rendered', () => {
    describe('And the user is not Authenticated', () => {
      beforeEach(() => {
        useAuth0.mockReturnValue({
          isAuthenticated: false
        });
        render(<Header />);
      });

      test('Then should render a h1 with data-testid page-title', () => {
        expect(screen.getByTestId('page-title')).toBeInTheDocument();
      });

      test('Then should render a button with data-testid login-button', () => {
        expect(screen.getByTestId('login-button')).toBeInTheDocument();
      });
    });
    describe('And the user is Authenticated', () => {
      beforeEach(() => {
        useAuth0.mockReturnValue({
          isAuthenticated: true,
          user: userMock
        });
        useDispatch.mockReturnValue(jest.fn());

        render(<Header />);
      });

      test('Then should render a button with data-testid logout-button', () => {
        expect(screen.getByTestId('logout-button')).toBeInTheDocument();
      });

      test('Then should render Xavi in Profile component', () => {
        expect(screen.getByText('Xavi')).toBeInTheDocument();
      });

      test('Then dispatch should have been called 1 time', () => {
        expect(useDispatch().mock.calls.length).toBe(1);
      });
    });
  });
});

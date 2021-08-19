import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import { render, screen } from '../../utils/test.utils';
import Footer from './Footer';

jest.mock('@auth0/auth0-react');

describe('Given a Footer component', () => {
  describe('When page is loaded', () => {
    describe('And the user is not Aunthenticated', () => {
      beforeEach(() => {
        useAuth0.mockReturnValue({ isAuthenticated: false });
        render(<Footer />);
      });

      test('Then home button should be in the document', () => {
        expect(screen.getByTestId('button-home')).toBeInTheDocument();
      });

      test('Then go back button should be in the document', () => {
        expect(screen.getByTestId('button-back')).toBeInTheDocument();
      });

      test('Then profile button should be in the document', () => {
        expect(screen.getByText('Login')).toBeInTheDocument();
      });
    });
    describe('And the user is Aunthenticated with user name Xavi', () => {
      beforeEach(() => {
        useAuth0.mockReturnValue({ isAuthenticated: true, user: { name: 'Xavi' } });
        render(<Footer />);
      });

      test('Then Xavi should be in the document', () => {
        expect(screen.getByText('Xavi')).toBeInTheDocument();
      });
    });
  });
});

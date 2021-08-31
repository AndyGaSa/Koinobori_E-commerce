import React from 'react';
import App from './App';
import { render, screen } from './utils/testUtils';

describe('Given a App component', () => {
  describe('When user is not logged', () => {
    test('Login button should render', () => {
      render(<App />);
      expect(screen.getByText(/Login/i)).toBeInTheDocument();
    });
  });
  describe('When user is logged', () => {
    test('Logout button should render', () => {
      const userLogged = { user: { given_name: 'Lola' } };
      render(<App />, userLogged);
      expect(screen.getByText(/Logout/i)).toBeInTheDocument();
    });
  });
});

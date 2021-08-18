import React from 'react';
import { render, screen } from '../../utils/test.utils';
import LoginButton from './LogInButton';

beforeEach(() => {
  render(<LoginButton />);
});

describe('Given a LoginButton component', () => {
  describe('When is rendered', () => {
    test('Then button will be in the document', () => {
      expect(screen.getByTestId('logIn-button-test')).toBeInTheDocument();
    });
    test('And the value will be Log In', () => {
      const logInButton = screen.getByTestId('logIn-button-test');
      expect(logInButton.textContent).toBe('Log In');
    });
  });
});

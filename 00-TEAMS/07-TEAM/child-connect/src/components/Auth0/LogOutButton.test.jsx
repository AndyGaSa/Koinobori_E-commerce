import React from 'react';
import { render, screen } from '../../utils/test.utils';
import LogOutButton from './LogOutButton';

beforeEach(() => {
  render(<LogOutButton />);
});

describe('Given a LogOutButton component', () => {
  describe('When is rendered', () => {
    test('Then button will be in the document', () => {
      expect(screen.getByTestId('logOut-button-test')).toBeInTheDocument();
    });
    test('And the value will be LogOut', () => {
      const logOutButton = screen.getByTestId('logOut-button-test');
      expect(logOutButton.textContent).toBe('LogOut');
    });
  });
});

import React from 'react';
import { render, screen } from '../../utils/test.utils';
import Profile from './Profile';

beforeEach(() => {
  render(<Profile />);
});

describe('Given a Profile component', () => {
  describe('When is rendered', () => {
    test('Then a div will be in the document', () => {
      expect(screen.getByTestId('profile-div-test')).toBeInTheDocument();
    });
  });
});

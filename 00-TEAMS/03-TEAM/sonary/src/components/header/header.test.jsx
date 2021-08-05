import React from 'react';
import { fireEvent, render, screen } from '../../utils/test.utils';
import Header from './Header';
import Dashboard from '../main/dashboard/Dashboard';

describe('Given a Header component', () => {
  render(<Header />);
  test('Then create button should be in the document', () => {
    expect(screen.getByTestId('profile-image')).toBeInTheDocument();
  });
  describe('And logo image is clicked', () => {
    beforeEach(() => {
      const logoImage = screen.getByTestId('logo-image');
      fireEvent.click(logoImage);
      render(<Dashboard />);
    });
  });
});

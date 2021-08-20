import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Given a App component', () => {
  test('Then e-Commerce should appear', () => {
    render(<Header />);
    expect(screen.getByText(/e-Commerce/i)).toBeInTheDocument();
  });
});

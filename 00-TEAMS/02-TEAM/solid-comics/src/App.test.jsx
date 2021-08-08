import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders should have footer', () => {
  render(<App />);
  expect(screen.getByRole('contentinfo')).toBeInTheDocument();
});

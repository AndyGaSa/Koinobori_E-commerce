import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Given a App component', () => {
  test('Then 6 components should appear', () => {
    render(<App />);
    expect(screen.getByTestId('ecommerce')).toBeInTheDocument();
  });
});

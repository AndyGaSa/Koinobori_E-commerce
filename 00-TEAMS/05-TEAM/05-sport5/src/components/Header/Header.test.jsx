import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Given a Header component', () => {
  test('When rendered it should have the title "Sport5"', () => {
    render(
      <Header />
    );
    expect(screen.getByText(/Sport5/i)).toBeInTheDocument();
  });
});

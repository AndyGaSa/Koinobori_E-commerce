import React from 'react';
import { render, screen } from '../../utils/test.utils';
import Header from './Header';

describe('Given a Header component', () => {
  test('When rendered it should have the title "Sport5"', () => {
    render(
      <Header />
    );
    expect(screen.getByText(/Sport5/i)).toBeInTheDocument();
  });
  test('When rendered it sholud have a button with dataid "input-button"', () => {
    render(
      <Header />
    );
    expect(screen.getByTestId('input-button')).toBeInTheDocument();
  });
});

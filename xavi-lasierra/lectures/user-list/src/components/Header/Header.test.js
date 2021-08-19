/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from '../../utils/test-utils';
import Header from './Header';

describe('Given a Header component', () => {
  test('Then should render Users', () => {
    render(
      <Header />
    );
    expect(screen.getByText(/Users/i)).toBeInTheDocument();
  });
});

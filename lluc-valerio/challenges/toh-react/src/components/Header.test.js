/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Header from './Header';
import { render, screen } from '../utils/test-utils';

describe('Given a Header component', () => {
  test('Should render Tour of Heroes', () => {
    render(
      <Header />
    );
    expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
  });
});

import React from 'react';
import Header from './Header';
import { screen, render } from '../utils/test.utils';

describe('Given a Trending component', () => {
  test('Should render FREE WORLDWIDE', () => {
    render(
      <Header />
    );
    expect(screen.getByText(/FREE/i)).toBeInTheDocument();
  });
});

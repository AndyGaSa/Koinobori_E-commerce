import React from 'react';
import Trending from './Trending';
import { screen, render } from '../utils/test.utils';

describe('Given a Trending component', () => {
  test('Should render NEW ARRIVALS', () => {
    render(
      <Trending />
    );
    expect(screen.getByText(/NEW/i)).toBeInTheDocument();
  });
});

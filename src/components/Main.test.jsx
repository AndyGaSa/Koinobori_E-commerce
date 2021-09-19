import React from 'react';
import Main from './Main';
import { screen, render } from '../utils/test.utils';

describe('Given a Trending component', () => {
  test('Should render NEW ARRIVALS', () => {
    render(
      <Main />
    );
    expect(screen.getByText(/NEW/i)).toBeInTheDocument();
  });
});

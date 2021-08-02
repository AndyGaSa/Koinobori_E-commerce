/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from '../../utils/test-utils';
import NotFound from './NotFound';

describe('Given a NotFound component', () => {
  test('Then should render Not Found', () => {
    render(
      <NotFound />
    );
    expect(screen.getByText(/Not Found/i)).toBeInTheDocument();
  });
});

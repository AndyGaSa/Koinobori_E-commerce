import React from 'react';
import { render, screen } from '../utils/utils-test';
import Header from './Header';

describe('Given the Header element', () => {
  test('Should contain the word ToDo', () => {
    render(
      <Header />,
    );
    // eslint-disable-next-line no-unused-expressions
    expect(screen.getByText(/My ToDo List/i)).toBeInTheDocument;
  });
});

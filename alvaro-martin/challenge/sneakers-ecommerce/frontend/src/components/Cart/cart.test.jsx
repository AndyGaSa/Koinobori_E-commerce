import React from 'react';
import Cart from './cart';
import { render, screen } from '../../utils/test-utils';

describe('Given a Cart component', () => {
  test('Should render h2', () => {
    render(<Cart />);
    expect(screen.getByText('Cart')).toBeInTheDocument();
  });
});

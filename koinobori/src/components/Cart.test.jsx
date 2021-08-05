import React from 'react';

import { screen, render } from '../utils/test.utils';
import Cart from './Cart';

describe('Given a Cart component', () => {
  test('Shopping cart will display', () => {
    render(
      <Cart />
    );

    expect(screen.getByText(/SHOPPING CART/i));
  });
});

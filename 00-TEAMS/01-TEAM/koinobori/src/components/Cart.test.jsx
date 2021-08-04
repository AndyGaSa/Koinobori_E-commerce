import React from 'react';

import { screen, render } from '../utils/test.utils';
import Cart from './Cart';

describe('Given a LoginPrfoile component', () => {
  test('Logout image displays when logged in', () => {
    render(
      <Cart />
    );

    expect(screen.getByTestId('logoutImagen'));
  });
});

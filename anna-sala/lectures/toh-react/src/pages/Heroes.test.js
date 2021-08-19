/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Heroes from './Heroes';
import { render, screen } from '../utils/test-utils';

describe('Given a Heroes component', () => {
  test('Should render <li> tag of dc-arrow', () => {
    render(
      <Heroes />,
    );
    expect(screen.getByTestId('list-item-dc-arrow')).toBeInTheDocument();
  });
});

/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from '../utils/test-utils';
import HeroForm from './HeroForm';

describe('Given a HeroForm component', () => {
  test('Should render Hero name', () => {
    render(
      <HeroForm />,
    );
    expect(screen.queryByText('i, anna')).not.toBeInTheDocument();
  });

  test('Should render input with test id input-publisher', () => {
    render(
      <HeroForm />,
    );
    expect(screen.getByTestId('input-publisher')).toBeInTheDocument();
  });
});

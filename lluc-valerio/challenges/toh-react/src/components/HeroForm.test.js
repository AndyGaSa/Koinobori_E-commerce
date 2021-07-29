/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from '../utils/test-utils';
import HeroForm from './HeroForm';

describe('Given a HeroFrom component', () => {
  test('Should render Hero name', () => {
    render(
      <HeroForm />
    );
    expect(screen.getByText(/Hero name/i).toBeInTheDocument());
  });

//   test('Should render Hero name', () => {
//     render(
//       <HeroForm />
//     );
//     expect(screen.getByText(/Hero name/i).toBeInTheDocument());
//   });
});

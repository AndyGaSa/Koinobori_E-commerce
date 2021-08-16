import React from 'react';
import { render, screen } from '../../utils/utils.test';
import Header from './Index';

describe('Given a Header component', () => {
  test('Should render an h1', () => {
    render(
      <Header />
    );
    expect(screen.getByText('EcoCesta')).toBeInTheDocument();
  });
});

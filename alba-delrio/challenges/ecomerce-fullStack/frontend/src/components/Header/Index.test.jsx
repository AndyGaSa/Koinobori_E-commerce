import React from 'react';
import { render, screen } from '../../Utils/testUtils';
import Header from './Index';

describe('Given a Header component', () => {
  test('Should render an h2', () => {
    render(
      <Header />
    );
    expect(screen.getByText('EcoCesta')).toBeInTheDocument();
  });
});

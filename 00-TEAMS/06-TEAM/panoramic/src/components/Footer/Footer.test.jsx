import React from 'react';
import { render, screen } from '../../utils/test.utils';
import Footer from './index';

describe('Given a Footer component', () => {
  test('Should render form', () => {
    render(
      <Footer />
    );
    expect(screen.getByText(/Contact/i)).toBeInTheDocument();
  });
});

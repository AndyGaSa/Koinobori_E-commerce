import React from 'react';
import { render, screen } from '../../utils/test.utils';
import Footer from './Footer';

describe('Given a footer component ', () => {
  test('Then an image should be in the document', () => {
    render(
      <Footer />
    );
    expect(screen.getByText('Team Sonary')).toBeInTheDocument();
  });
});

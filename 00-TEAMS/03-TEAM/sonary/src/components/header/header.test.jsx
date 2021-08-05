import React from 'react';
import { render, screen } from '../../utils/test.utils';
import Header from './Header';

describe('Given a header component ', () => {
  test('Then an image should be in the document', () => {
    render(
      <Header />
    );
    expect(screen.getByTestId('profile-image')).toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen } from '../../utils/test.utils';
import Footer from './index';

describe('Given a Footer component', () => {
  describe('When the component is rendered', () => {
    describe('Then should be a form ', () => {
      test('And should contain an "h3" tag with the word "contact"', () => {
        render(
          <Footer />
        );
        expect(screen.getByText(/Contact/i)).toBeInTheDocument();
      });
      test('And should contain a button with the "submit-button" id', () => {
        render(
          <Footer />
        );
        expect(screen.getByTestId('submit-button')).toBeInTheDocument();
      });
    });
  });
});

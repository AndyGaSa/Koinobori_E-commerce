import React from 'react';

import { render, screen } from '../../utils/test.utils';

import Footer from './index';

describe('Given a Footer component', () => {
  describe('When the component is rendered', () => {
    describe('Then should be a social media container', () => {
      test('And should contain an "li" tag with "instagram-icon" id', () => {
        render(
          <Footer />
        );
        expect(screen.getByTestId('instagram-icon')).toBeInTheDocument();
      });
    });
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
    describe('Then should be an span', () => {
      test('And should contain "Panoramic 2021" text', () => {
        render(
          <Footer />
        );
        expect(screen.getByText(/Panoramic 2021/i)).toBeInTheDocument();
      });
    });
  });
});

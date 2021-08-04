import React from 'react';
import { render, screen } from '../../utils/test.utils';
import Footer from './Footer';

describe('Given a Footer component', () => {
  describe('When page is loaded', () => {
    // arrange
    beforeEach(() => {
      // act
      render(<Footer />);
    });

    test('Then home button should be in the document', () => {
      // assert
      expect(screen.getByTestId('button-home')).toBeInTheDocument();
    });

    test('Then go back button should be in the document', () => {
      // assert
      expect(screen.getByTestId('button-back')).toBeInTheDocument();
    });

    test('Then profile button should be in the document', () => {
      // assert
      expect(screen.getByTestId('button-profile')).toBeInTheDocument();
    });
  });
});

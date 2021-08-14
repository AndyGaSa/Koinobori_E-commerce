import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '../Utils/test.utils';
import Footer from './Footer';

describe('Given a footer component', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
  });

  describe('When the footer is render', () => {
    test('Then a button should be in the document', () => {
      expect(screen.getByTestId('footer-button')).toBeInTheDocument();
    });
  });

  describe('And create button is clicked', () => {
    test('Then ', () => {
      const driverButton = screen.getByTestId('footer-button');
      fireEvent.click(driverButton);
    });
  });
});

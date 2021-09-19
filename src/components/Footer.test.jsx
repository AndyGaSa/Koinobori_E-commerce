import React from 'react';
import Footer from './Footer';
import { screen, render } from '../utils/test.utils';

describe('Given a Footer component', () => {
  describe('When there are no Footer', () => {
    beforeEach(() => {
      // act
      render(<Footer />);
    });

    test('Thenp PRIVACY POLICY should be in the document', () => {
      // assert
      expect(screen.queryByText(/PRIVACY POLICY/i)).toBeInTheDocument();
    });
    test('Thenp REFUND POLICY should be in the document', () => {
      // assert
      expect(screen.queryByText(/REFUND POLICY/i)).toBeInTheDocument();
    });
    test('Thenp CONTACT should be in the document', () => {
      // assert
      expect(screen.queryByText(/CONTACT/i)).toBeInTheDocument();
    });

    test('Thenp koinobori@info.jp should be in the document', () => {
      // assert
      expect(screen.queryByText(/koinobori@info.jp/i)).toBeInTheDocument();
    });
  });
});

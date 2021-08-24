import React from 'react';
import { render, screen } from '../utils/testUtils';
import Adversarie from './Adversarie';

describe('Given a Adversarie component', () => {
  describe('When is rendered', () => {
    test('Should contain Jordi', () => {
      render(<Adversarie />);
      expect(screen.getByText('Jordi')).toBeInTheDocument();
    });
  });
});

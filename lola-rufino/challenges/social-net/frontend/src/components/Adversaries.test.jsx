import React from 'react';
import { render, screen } from '../utils/testUtils';
import Adversaries from './Adversaries';

describe('Given a Adversaries component', () => {
  describe('When is rendered', () => {
    test('Should render React', () => {
      render(<Adversaries />);
      expect(screen.getByText('React')).toBeInTheDocument();
    });
  });
});

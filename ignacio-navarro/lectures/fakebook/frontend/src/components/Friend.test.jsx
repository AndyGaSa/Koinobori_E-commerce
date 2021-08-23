import React from 'react';
import { render, screen } from '../utils/testUtils';
import Friend from './Friend';

describe('Given a Friend component', () => {
  describe('When is rendered', () => {
    test('Should contain Jordi', () => {
      render(<Friend />);
      expect(screen.getByText('Jordi')).toBeInTheDocument();
    });
  });
});

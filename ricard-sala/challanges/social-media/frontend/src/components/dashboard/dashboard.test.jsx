import React from 'react';
import { render, screen } from 'react-dom';
import Dashboard from './Dashboard';

describe('given a Dashboard component', () => {
  describe('When there are no user', () => {
    beforeEach(() => {
      // act
      render(<Dashboard />);
    });

    test('Then create button should be in the document', () => {
      // assert
      expect(screen.getByTestId('create-button')).toBeInTheDocument();
    });
  });
});

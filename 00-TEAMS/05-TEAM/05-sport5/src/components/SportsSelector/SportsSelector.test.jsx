import React from 'react';
import { render, screen } from '../../utils/test.utils';
import SportsSelector from './SportsSelector';

describe('Given a SportsSelector component', () => {
  describe('When is rendered', () => {
    test('Then rugby-icon should be in the document', () => {
      render(
        <SportsSelector />
      );
      expect(screen.getByTestId('rugby-icon')).toBeInTheDocument();
    });
  });
});

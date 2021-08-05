import React from 'react';
import { render, screen } from '../../utils/test.utils';
import TeamDetail from './TeamDetail';

jest.mock('../../redux/actions/sports.creator', () => ({
  getTeamDetails: () => ({
    type: 'LOAD_DETAILS',
    details: {
      id: 1111,
      badge: 'badge.img',
      name: 'Inter',
      city: 'Milan'
    }
  })
}));

describe('Given a component Teamdetails', () => {
  describe('When rendered with valid params', () => {
    beforeEach(() => {
      render(
        <TeamDetail />
      );
    });
    test('Then an image with data-id "team__badge should be on screen', () => {
      expect(screen.getByTestId('team__badge')).toBeInTheDocument();
    });
    test('Then the word "Inter" should be in the document', () => {
      expect(screen.getByText(/Inter/i)).toBeInTheDocument();
    });
  });
});

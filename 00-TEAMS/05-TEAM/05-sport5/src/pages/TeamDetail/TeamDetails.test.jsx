import React from 'react';
import { render, screen } from '../../utils/test.utils';
import TeamDetail from './TeamDetail';
import { getTeamDetails } from '../../redux/actions/sports.creator';
import actionTypes from '../../redux/actions/sports.types';

jest.mock('../../redux/actions/sports.creator');

describe('Given a component Teamdetails', () => {
  describe('When rendered with valid params', () => {
    beforeEach(() => {
      getTeamDetails.mockReturnValue(({
        type: actionTypes.LOAD_DETAILS,
        details: {
          id: 1111,
          banner: 'banner.img',
          badge: 'badge.img',
          name: 'Inter',
          city: 'Milan',
          league: 'Italian League',
          stadiumName: 'Stadium'
        }
      }));
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
  describe('When rendered with invalid params', () => {
    beforeEach(() => {
      getTeamDetails.mockReturnValue(({
        type: actionTypes.LOAD_DETAILS,
        details: {
          id: null,
          banner: null,
          badge: null,
          name: null,
          city: null,
          league: null,
          stadiumName: null
        }
      }));
      render(
        <TeamDetail />
      );
    });
    test('Then an image with data-id "team__badge should be on screen', () => {
      expect(screen.getByTestId('team__badge')).toBeInTheDocument();
    });
    test('Then the word "city" shouldn\'t be in the document', () => {
      expect(screen.queryByText(/city/i)).not.toBeInTheDocument();
    });
  });
});

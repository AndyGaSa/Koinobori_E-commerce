import React from 'react';
import { render, screen } from '../../../utils/test.utils';
import Information from './Information';
import { loadDashboard } from '../../../redux/actions/dashboard.creator';
import actionTypes from '../../../redux/actions/actionTypes';

jest.mock('../../../redux/actions/dashboard.creator');

describe('Given a Information component', () => {
  describe('When rendered with certain parameters', () => {
    beforeEach(() => {
      loadDashboard.mockReturnValue(({
        type: actionTypes.LOAD_DASHBOARD,
        dashboard: [{
          track_id: 218732426, track_name: 'Bad Habits', track_name_translation_list: Array(0), track_rating: 100, commontrack_id: 128751060
        }
        ]
      }));
      render(
        <Information />
      );
    });
    test('Then the track name Bad Habits should be on the screen', () => {
      expect(screen.getByText('Bad Habits')).toBeInTheDocument();
    });
  });
});

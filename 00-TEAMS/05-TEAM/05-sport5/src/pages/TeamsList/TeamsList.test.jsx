import React from 'react';
import { fireEvent, render, screen } from '../../utils/test.utils';
import TeamsList from './TeamsList';
import { getTeams } from '../../redux/actions/sports.creator';
import sportsTypes from '../../redux/actions/sports.types';

jest.mock('../../redux/actions/sports.creator');

describe('Given a Teams List component', () => {
  describe('When there are no teams rendered', () => {
    beforeEach(() => {
      getTeams.mockReturnValue({
        type: sportsTypes.LOAD_TEAMS,
        leagueTeamsList: [
          { id: '0001', name: 'Barça', league: 'La liga' },
          { id: '0002', name: 'Madrid', league: 'La liga' },
          { id: '0003', name: 'Getafe', league: 'La liga' }
        ]
      });
      render(<TeamsList />);
    });

    test('Then should render La liga in the title', () => {
      expect(screen.getByText('La liga')).toBeInTheDocument();
    });

    ['Barça', 'Madrid', 'Getafe']
      .forEach((dataTestId) => {
        test(`Then should render team ${dataTestId} from a league`, () => {
          expect(screen.getByText(dataTestId)).toBeInTheDocument();
        });
      });

    describe('When the favourite button is clicked', () => {
      beforeEach(() => {
        const favouriteButton = screen.getByTestId('Barça-team-0-favourite');
        fireEvent.click(favouriteButton);
      });

      test('Then the clicked button class should contain active', () => {
        expect(screen.getByTestId('Barça-team-0-favourite').className).toContain('teams__favourite-button--active');
      });
    });
  });
});

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
    describe('When "bar" is written in the filter input', () => {
      beforeEach(() => {
        const filterInput = screen.getByTestId('filter-input');
        fireEvent.change(filterInput, { target: { value: 'Bar' } });
      });
      test('Then "Barça" should be in the document', () => {
        expect(screen.queryByText('Barça')).toBeInTheDocument();
      });
      test('Then "Madrid" should not be in the document', () => {
        expect(screen.queryByText('Madrid')).not.toBeInTheDocument();
      });
    });
    describe('When favourite button from team Getafe is cklicked', () => {
      beforeEach(() => {
        const getafeFavouriteButton = screen.getByTestId('Getafe-team-2-favourite');
        fireEvent.click(getafeFavouriteButton);
      });
      test('Button classNames should contain "teams__favourite-button--active" ', () => {
        expect(screen.getByTestId('Getafe-team-2-favourite').className).toContain('teams__favourite-button--active');
      });
      test('dispatch function should be called', () => {
        const getafeFavouriteButton = screen.getByTestId('Getafe-team-2-favourite');
        fireEvent.click(getafeFavouriteButton);
        expect(screen.getByTestId('Getafe-team-2-favourite').className).not.toContain('teams__favourite-button--active');
      });
    });
  });
});

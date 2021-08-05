import React from 'react';

import { fireEvent, render, screen } from '../../utils/test.utils';
import LeaguesList from './LeaguesList';

jest.mock('../../redux/actions/sports.creator', () => ({
  getLeagues: () => ({
    type: 'LOAD_LEAGUES',
    leaguesByCountries: {
      spain: [
        { id: '0001', name: 'Spanish League 1' },
        { id: '0002', name: 'Spanish League 2' },
        { id: '0003', name: 'Spanish League 3' }
      ],
      andorra: [
        { id: '0004', name: 'Andorra League 1' },
        { id: '0005', name: 'Andorra League 2' },
        { id: '0006', name: 'Andorra League 3' }
      ]
    }
  })
}));

describe('Given a LeaguesList component', () => {
  describe('When is rendered with leagues data', () => {
    describe('And there are not any favourite league', () => {
      beforeEach(() => {
        render(
          <LeaguesList />
        );
      });

      test('Then Andorra should be in the document', () => {
        expect(screen.getByText('ANDORRA')).toBeInTheDocument();
      });

      test('Then Andorra League 3 should be in the document', () => {
        expect(screen.getByText('Andorra League 3')).toBeInTheDocument();
      });

      ['spain-league-0', 'spain-league-1', 'spain-league-2', 'andorra-league-0', 'andorra-league-1', 'andorra-league-2']
        .forEach((dataTestId) => {
          test(`Then the li with data-testid ${dataTestId} class should be leagues__league`, () => {
            expect(screen.getByTestId(dataTestId).className).toBe('leagues__league');
          });
        });

      describe('And you click on spain-league-1-favourite', () => {
        beforeEach(() => {
          const favouriteButton = screen.getByTestId('spain-league-1-favourite');
          fireEvent.click(favouriteButton);
        });

        test('Then the clicked button class should contain leagues__favourite-button--active', () => {
          expect(screen.getByTestId('spain-league-1-favourite').className).toContain('leagues__favourite-button--active');
        });

        test('Then the li with data-testid spain-league-1 class should contain leagues__league--top', () => {
          expect(screen.getByTestId('spain-league-1').className).toContain('leagues__league--top');
        });
      });

      describe('And you click andorra-button', () => {
        beforeEach(() => {
          const countryButton = screen.getByTestId('andorra-button');
          fireEvent.click(countryButton);
        });

        test('Then andorra-block class should contain leagues__block--closed', () => {
          expect(screen.getByTestId('andorra-block').className).toContain('leagues__block--closed');
        });

        test('Then spain-block class should be leagues__block', () => {
          expect(screen.getByTestId('spain-block').className).toBe('leagues__block');
        });

        test('Then if you click again andorra-block class should be leagues__block', () => {
          const countryButton = screen.getByTestId('andorra-button');
          fireEvent.click(countryButton);
          expect(screen.getByTestId('spain-block').className).toBe('leagues__block');
        });
      });
    });

    describe('And andorra league 3 is a favourite league', () => {
      beforeEach(() => {
        const initialState = {
          favourites: {
            favouriteLeagues: [
              { id: '0006', name: 'Andorra League 3' }
            ]
          }
        };
        render(
          <LeaguesList />,
          initialState
        );
      });

      [{ dataTestId: 'andorra-league-0', expectation: 'leagues__league' },
        { dataTestId: 'andorra-league-1', expectation: 'leagues__league' },
        { dataTestId: 'andorra-league-2', expectation: 'leagues__league leagues__league--top' }]
        .forEach((scenario) => {
          test(`Then the li with data-testid ${scenario.dataTestId} class should be ${scenario.expectation}`, () => {
            expect(screen.getByTestId(scenario.dataTestId).className).toBe(scenario.expectation);
          });
        });

      describe('And you click on andorra-league-2-favourite', () => {
        beforeEach(() => {
          const favouriteButton = screen.getByTestId('andorra-league-2-favourite');
          fireEvent.click(favouriteButton);
        });

        test('Then the clicked button class should be leagues__favourite-button', () => {
          expect(screen.getByTestId('andorra-league-2-favourite').className).toBe('leagues__favourite-button');
        });

        test('Then the li with data-testid andorra-league-2 class should be leagues__league', () => {
          expect(screen.getByTestId('andorra-league-2').className).toBe('leagues__league');
        });
      });
    });
    describe('And you type spanish in filter-input', () => {
      beforeEach(() => {
        const filterInput = screen.getByTestId('filter-input');
        fireEvent.change(filterInput, { target: { value: 'spanish' } });
      });

      test('Then Spanish League 2 should be in the document', () => {
        expect(screen.getByText('Spanish League 2')).toBeInTheDocument();
      });

      test('Then Andorra League should not be in the document', () => {
        expect(screen.queryByText('Andorra League')).not.toBeInTheDocument();
      });
    });
  });
});

import React from 'react';
import { render, screen } from '../../utils/test.utils';
import TeamsList from './TeamsList';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useEffect: () => {}
}));

describe('Given a Teams List component', () => {
  describe('When there are no teams rendered', () => {
    beforeEach(() => {
      render(<TeamsList />);
    });

    test('Then should render teams list title', () => {
      expect(screen.getByText('TeamList title:')).toBeInTheDocument();
    });

    test('Then should render all Teams from a league', () => {
      expect(screen.getByTestId('all-teams-per-league')).toBeInTheDocument();
    });
  });
});

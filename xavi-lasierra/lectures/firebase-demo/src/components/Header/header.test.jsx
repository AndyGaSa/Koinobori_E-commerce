import React from 'react';
import userMock from '../../mocks/user.mock';
import { render, screen, fireEvent } from '../../utils/test.utils';
import Header from './Header';

describe('Given a Header component', () => {
  describe('When it is rendered', () => {
    describe('And the user is Authenticated', () => {
      beforeEach(() => {
        const initialState = {
          user: {
            isAuthenticated: true,
            user: userMock
          }
        };
        render(<Header />, initialState);
      });

      test('Then should render an h1 with data-testid=main-title', () => {
        expect(screen.getByTestId('main-title')).toBeInTheDocument();
      });

      test('Then should render a logout button with data-testid=logout-button', () => {
        expect(screen.getByTestId('logout-button')).toBeInTheDocument();
      });

      test('Then should render a span with an innerText Xavi', () => {
        expect(screen.getByText('Xavi')).toBeInTheDocument();
      });

      describe('And you click logout button', () => {
        beforeEach(() => {
          const favouriteButton = screen.getByTestId('spain-league-1-favourite');
          fireEvent.click(favouriteButton);
        });
      });
    });
  });
});

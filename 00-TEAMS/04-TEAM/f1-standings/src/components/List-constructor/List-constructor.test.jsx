import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '../Utils/test.utils';
import ListConstructor from './List-constructor';

describe('Given a ListDriver component', () => {
  describe('When listDriver is rendered', () => {
    test('Then a button should be in the document', () => {
      const initialState = {
        drivers: [],
        races: [],
        constructor: [
          [
            {
              position: '1',
              positionText: '1',
              points: '303',
              wins: '4',
              Constructor: {
                constructorId: 'mercedes',
                url: 'http://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One',
                name: 'Mercedes',
                nationality: 'German'
              }
            }
          ]
        ]
      };
      render(
        <BrowserRouter>
          <ListConstructor />
        </BrowserRouter>, initialState
      );
      expect(screen.getByTestId('mercedes')).toBeInTheDocument();
    });
  });
});

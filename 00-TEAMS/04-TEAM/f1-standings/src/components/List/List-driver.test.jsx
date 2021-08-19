import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '../Utils/test.utils';
import ListDriver from './List-driver';

describe('Given a ListDriver component', () => {
  describe('When listDriver is rendered', () => {
    test('Then a button should be in the document', () => {
      const initialState = {
        drivers: [
          [
            {
              position: '1',
              positionText: '1',
              points: '195',
              wins: '4',
              Driver: {
                driverId: 'hamilton',
                permanentNumber: '44',
                code: 'HAM',
                url: 'http://en.wikipedia.org/wiki/Lewis_Hamilton',
                givenName: 'Lewis',
                familyName: 'Hamilton',
                dateOfBirth: '1985-01-07',
                nationality: 'British'
              },
              Constructors: [
                {
                  constructorId: 'mercedes',
                  url: 'http://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One',
                  name: 'Mercedes',
                  nationality: 'German'
                }
              ]
            }
          ]
        ]
      };
      render(
        <BrowserRouter>
          <ListDriver />
        </BrowserRouter>, initialState
      );
      expect(screen.getByTestId('Lewis')).toBeInTheDocument();
    });
  });
});

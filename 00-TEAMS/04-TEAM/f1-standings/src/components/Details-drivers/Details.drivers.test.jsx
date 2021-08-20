import React from 'react';
import { render, screen } from '../Utils/test.utils';
import DetailsDriver from './Details.drivers';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    driverId: 'hamilton'
  })
}));

describe('Given DetailsDriver component', () => {
  test('When is rendered', () => {
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
      <DetailsDriver />, initialState
    );
    const driverDetails = screen.getByTestId('driver-name-Lewis');
    expect(driverDetails.textContent).toBe('Lewis');
  });
});

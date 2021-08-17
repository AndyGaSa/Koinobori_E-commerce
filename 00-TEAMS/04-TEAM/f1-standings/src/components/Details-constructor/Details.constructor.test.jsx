import React from 'react';
import { render, screen } from '../Utils/test.utils';
import Detailsconstructor from './Details.constructor';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    constructorId: 'mercedes'
  })
}));

describe('Given a detail constructor component', () => (
  test('When is rendered', () => {
    const initialState = {
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
      <Detailsconstructor />,
      initialState
    );

    const constructorDetails = screen.getByTestId('constructor-Name-mercedes');
    expect(constructorDetails.textContent).toBe('mercedes');
  })
));

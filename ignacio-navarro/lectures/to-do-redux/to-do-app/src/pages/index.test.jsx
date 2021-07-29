import React from 'react';
import { render } from '@testing-library/react';
import Index from '.';

describe('input component', () => {
  let sut;

  test('Should match snapshot', () => {
    sut = render(
      <Index />,
    );

    expect(sut).toMatchSnapshot();
  });
});

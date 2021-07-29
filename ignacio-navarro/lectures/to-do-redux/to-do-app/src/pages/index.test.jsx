import React from 'react';
import { render } from '../utils/utils-test';
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

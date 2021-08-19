/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Header from './Header';
import Form from '../../pages/Form/Form';
import { render, screen } from '../../utils/test-utils';
import { useParams } from 'react-router';
jest.mock("react-router",()=>
useParams:jest.fn().mockReturnValue([heroId:"dc-arrow"]))

describe('Given a Header component', () => {
  test('Should render Tour of Heroes', () => {
    render(
      <Header />
    );
    expect(screen.getByText(/Tour/i)).toBeInTheDocument();
  });
  test('Should render Tour of Heroes', () => {
    render(
      <Form />
    );
    expect(screen.queryByText('i, anna')).not.toBeInTheDocument();
  });
  test('Should render Tour of Heroes', () => {
    render(
      <Form />
    );
    expect(screen.queryById('input-publisher')).not.toBeInTheDocument();
  });
});

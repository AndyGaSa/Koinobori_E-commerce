import React from 'react';
import * as reactRedux from 'react-redux';
import { render, screen } from '../../Utils/testUtils';
import loadArticles from '../../Redux/actions/actionCreators';
import actionTypes from '../../Redux/actions/actionTypes';
import ArticleList from './Index';

jest.mock('../../redux/actions/actionCreators');

describe('Given an Articleslist', () => {
  describe('when is rendered', () => {
    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');
    beforeEach(() => {
      useDispatchMock.mockClear();
    });

    it('does something', () => {
      // ARRANGE
      const dispatch = jest.fn();
      useDispatchMock.mockReturnValue(dispatch);
      render(
        <ArticleList />
      );

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

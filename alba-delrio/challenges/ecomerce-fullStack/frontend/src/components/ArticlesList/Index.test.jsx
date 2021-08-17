import React from 'react';
import * as reactRedux from 'react-redux';
import { render, screen } from '../../Utils/testUtils';
import loadArticles from '../../Redux/actions/actionCreators';
import actionTypes from '../../Redux/actions/actionTypes';
import ArticleList from './Index';

jest.mock('../../redux/actions/actionCreators');

describe('Given an Articleslist', () => {
  test('when is rendered', () => {
    loadArticles.mockReturnValue({
      type: actionTypes.LOAD_ARTICLES,
      articles: [{
        name: 'Espinacas',
        price: 3,
        currency: 'euros',
        img: ' smds',
        stock: 3
      }
      ]
    });
    render(
      <ArticleList />
    );
    const articleName = screen.getByTestId('article-name-Espinacas');
    expect(articleName.textContent).toBe('Espinacas');
  });
});

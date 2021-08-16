import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import loadArticles from '../../Redux/actions/actionCreators';
import './ArticleList.scss';

export default function AtriclesList() {
  const articles = useSelector((store) => store.articles);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadArticles());
  }, []);

  return (

    <ul>
      {articles.map((article) => (
        <li className="listElement" key={article.name}>
          <img className="listElement__img" src={article.img} alt="árandanos" />
          <div className="data">
            <p data-testid={`article-name-${article .name}`}>
              {article.name}
            </p>
            <span>
              {article.price}
              {' '}
              {article.currency}
            </span>
          </div>
          <div className="listElement__button"><button type="button">+</button></div>
        </li>
      ))}
    </ul>

  );
}

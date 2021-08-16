import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import BeerCard from './components/BeerCard/BeerCard';
import Search from './components/Search/Search';

ReactDOM.render(
  <React.StrictMode>
    <BeerCard />
    <Search />
  </React.StrictMode>,
  document.getElementById('root'),
);

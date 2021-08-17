/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Principal from './components/Principal/Principal';
import Friends from './components/Friends/Friends';
import Adversaries from './components/Adversaries/Adversaries';

import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Principal} />
          <Route path="/" exact component={Principal} />
          <Route path="/friends" component={Friends} />
          <Route path="/adversaries" component={Adversaries} />
        </Switch>
      </BrowserRouter>
    </>

  // <>
  //   <header>user image and name</header>
  //   <section>user data</section>
  //   <aside>People</aside>
  //   <a href="#">friends</a>
  //   <a href="#">adversaries</a>
  // </>
  );
}

export default App;

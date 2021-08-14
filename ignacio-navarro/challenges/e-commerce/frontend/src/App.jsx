import React from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import configureStore from './redux/store';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Browse from './pages/Browse';
import All from './pages/All';
import Details from './pages/Details';
import Footer from './components/Footer/Footer';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Provider store={configureStore()}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/browse" component={Browse} />
          <Route path="/all" component={All} />
          <Route path="/cart" component={Cart} />
          <Route path="/details/:beerId" component={Details} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>

    </Provider>
  );
}

export default App;

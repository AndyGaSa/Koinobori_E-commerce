import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './redux/stores';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';

import './styles/App.scss';

function App() {
  return (
    <Provider store={configureStore()}>
      <Header />
      <main data-testid="ecommerce" className="ecommerce">
        <ProductList />
        <Cart />
      </main>
      <Footer />
    </Provider>
  );
}

export default App;

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadProducts } from './redux/actions/actionCreators';
import Products from './components/Products';
import Cart from './components/Cart';
import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProducts());
  }, []);
  return (
    <div className="App">
      <header className="app-header" />
      <h1 className="app-header__title">Caramelos Paco</h1>
      <h2 className="app-header__sub-title">Están Pa Comérselos Todos!!</h2>
      <div className="app-body">
        <Products />
        <Cart />
      </div>
      <footer className="app-footer" />
    </div>
  );
}

export default App;

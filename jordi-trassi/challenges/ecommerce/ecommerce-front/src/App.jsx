import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadProducts } from './redux/actions/actionCreators';
import Products from './components/Products';
// import Cart from './components/Cart';
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
      <Products />
      {/* <Cart /> */}
      <footer className="app-footer" />
    </div>
  );
}

export default App;

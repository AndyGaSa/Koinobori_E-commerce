import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { loadStocks } from './redux/actions/action.creators';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadStocks());
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </>

  );
}

export default App;

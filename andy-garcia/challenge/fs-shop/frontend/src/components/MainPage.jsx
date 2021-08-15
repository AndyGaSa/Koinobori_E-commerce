/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import { fetchUserAccount } from '../redux/actions';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function MainPage() {
  const { user, isAuthenticated } = useAuth0();
  const userAccount = useSelector(({ logUser }) => logUser);
  const dispatch = useDispatch();

  if (isAuthenticated) {
    console.log(`Usuario ${user.name} autentificado`);
    useEffect(() => {
      dispatch(fetchUserAccount(user.name));
    }, []);
  }

  return (
    <div className="MainPage">
      {isAuthenticated && (
      <h1>{userAccount?.name}</h1>
      )}
      <h1>hola soy el main</h1>

      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default MainPage;

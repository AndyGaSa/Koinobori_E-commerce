/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import { fetchUserAccount } from '../redux/actions';

function MainPage() {
  const { user, isAuthenticated } = useAuth0();
  const logUser = useSelector(({ userAccount }) => userAccount);
  const dispatch = useDispatch();

  if (isAuthenticated) {
    console.log(`Usuario ${user.name} autentificado`);
    useEffect(() => {
      dispatch(fetchUserAccount(user));
    }, []);
    console.log('Contenido de user en store');
    console.log(logUser);
  }

  return (
    <div className="MainPage">
      {isAuthenticated && (
      <h1>{logUser?.user[0].name}</h1>
      )}
      <h1>hola soy el main</h1>
    </div>
  );
}

export default MainPage;

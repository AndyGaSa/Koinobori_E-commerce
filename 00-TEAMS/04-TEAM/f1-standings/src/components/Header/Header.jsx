import React from 'react';
import './Header.scss';
import { useAuth0 } from '@auth0/auth0-react';

export default function Header() {
  const { logout } = useAuth0();
  const { loginWithRedirect } = useAuth0();
  const { user, isAuthenticated } = useAuth0();

  return (

    <>

      <nav className="header">
        { isAuthenticated && (
        <div className="login-credentials">

          <h2 data-testid="user-log">{user.name}</h2>

        </div>
        )}

        <button className="header__login" type="button" onClick={() => loginWithRedirect()}>{ isAuthenticated }</button>

        <img className="header__f1" src="https://logodownload.org/wp-content/uploads/2016/11/formula-1-logo-5-3.png" alt="" />
        <button data-testid="header-button" className="header__logout" type="button" onClick={() => logout({ returnTo: window.location.origin })}>
          {' '}
          <img className="logout__img" src="https://image.flaticon.com/icons/png/512/1023/1023655.png" alt="" />
          {' '}
        </button>
      </nav>
      <div className="test" />
    </>
  );
}

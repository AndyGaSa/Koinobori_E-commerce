/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadUsers, logout } from '../../redux/actions/actionCreators';

import './mainContainer.css';

export default function MainContainer() {
  const { user, users } = useSelector((store) => ({
    user: store.auth.user,
    users: store.users
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  function handleLogout() {
    dispatch(logout());
  }

  return (
    <main>
      <button
        type="button"
        className="logout-button"
        data-testid="logout-button"
        onClick={handleLogout}
      >
        Logout
      </button>
      <h2 data-testid="main__title" className="main__title">
        {user.name}
        :
        {' '}
        Mis Gnomos Amigos
      </h2>
      <ul className="users-list">
        {users?.map((neighbour) => (
          <div key={neighbour.name} className="users-list__container">
            <li className="users-list__item">
              <img src={neighbour.img} alt={neighbour.name} className="item__img" />
              <article className="users-list__article">
                <h3>{neighbour.name}</h3>
                <h4>
                  {neighbour.age}
                  {' '}
                  años
                </h4>
                <p>
                  Algo sobre mi:
                  {' '}
                  {neighbour.about}
                </p>
              </article>
              <button
                type="button"
                className="users-list__button"
                data-testid="users-list__button-add"
                onClick={() => console.log(neighbour._id)}
              >
                Add to my friends

              </button>
              <Link to={`/details/${neighbour._id}`}>
                <button
                  type="button"
                  className="users-list__button"
                  data-testid="users-list__button-details"
                  onClick={() => console.log(neighbour._id)}
                >
                  Saber más sobre mi...
                </button>
              </Link>
            </li>
          </div>
        ))}
      </ul>
    </main>
  );
}

/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import loadUsers from '../../redux/actions/actionCreators';

import './mainContainer.css';

export default function MainContainer() {
  const users = useSelector((store) => store.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  return (
    <main>
      <h2 data-testid="main__title" className="main__title">Nuestros Gnomo Users Destacados</h2>
      <ul className="users-list">
        {users?.map((user) => (
          <div key={user.name} className="users-list__container">
            <li className="users-list__item">
              <img src={user.img} alt={user.name} className="item__img" />
              <article className="users-list__article">
                <h3>{user.name}</h3>
                <h4>
                  {user.age}
                  {' '}
                  años
                </h4>
                <p>
                  Algo sobre mi:
                  {' '}
                  {user.about}
                </p>
              </article>
              <button
                type="button"
                className="users-list__button"
                data-testid="users-list__button-add"
                onClick={() => console.log('Add to my gnomos friends')}
              >
                Add to my friends

              </button>
              <Link to={`/details/${user._id}`}>
                <button
                  type="button"
                  className="users-list__button"
                  data-testid="users-list__button-details"
                  onClick={() => console.log(user._id)}
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

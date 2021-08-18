/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loadUsers from '../../redux/actions/actionCreators';

export default function MainContainer() {
  const users = useSelector((store) => store.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  return (
    <main>
      <h2 data-testid="main__title">Nuestros Gnomo Users Destacados</h2>
      <ul className="users-list">
        {users?.map((user) => (
          <div key={user.name} className="users-list__container">
            <li className="users-list__item">
              <img src={user.img} alt={user.name} className="item__img" />
              <article className="users-list__article">
                <h3>{user.name}</h3>
                <h4>{user.age}</h4>
                <p>{user.about}</p>
              </article>
              <button
                type="button"
                className="users-list__button"
                data-testid="users-list__button"
                onClick={console.log('Add to my gnomos friends')}
              >
                Add to my friends

              </button>
            </li>
          </div>
        ))}
      </ul>
    </main>
  );
}

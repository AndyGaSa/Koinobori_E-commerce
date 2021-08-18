/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import './details.css';

export default function Details() {
  const users = useSelector((store) => store.users);
  // const dispatch = useDispatch();

  const { userId } = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    if (userId) {
      const foundUser = users.find((currentUser) => currentUser._id === userId);
      setUser(foundUser);
    }
  }, [userId]);

  return (
    <>
      <section className="details-header">
        <div>
          <img src="" alt={user?.name} />
        </div>
        <div className="details-header__info">
          <h2 className="info__name">
            {user?.name.toUpperCase()}
            {' '}
            Info
          </h2>
          <p className="info__edad">
            Edad:
            {' '}
            {user?.age}
          </p>
        </div>
        <div>
          <img className="info__notification" src="" alt="Logo campana de notificaciones" />
          <p>{user?.greating}</p>
        </div>
      </section>

      <section className="details-people">
        <h4>Mis amigos Gnomos</h4>
        <ul className="people-list">
          {user?.friends?.map((friend) => (
            <div key={friend.name} className="people-list__container">
              <li className="people-list__item">
                <p>
                  {friend.name}
                  {' '}
                  AQUI HAY UN AMIGO,
                  PORQUE AUN QUE NO LOS VEAMOS, LOS AMIGOS SIEMPRE ESTAN

                </p>
                <button
                  type="button"
                  className="people-list__button"
                  data-testid="people-list__button-add-friend"
                  onClick={() => console.log('Add to my gnomos list friend, please')}
                >
                  Add to my friend list
                </button>
              </li>

            </div>
          ))}
        </ul>
      </section>

      <section className="details-people">
        <h4>Gnomos que detesto</h4>
        <ul className="people-list">
          {user?.adversaries?.map((adversary) => (
            <div key={adversary.name} className="people-list__container">
              <li className="people-list__item">
                <p>
                  {adversary.name}
                  {' '}
                  AQUI HAY UN ADVERSARIO
                </p>
                <button
                  type="button"
                  className="people-list__button"
                  data-testid="people-list__button-add-adversary"
                  onClick={() => console.log('Add to my gnomos list adversary, please')}
                >
                  Add to my adversaries list
                </button>
              </li>

            </div>
          ))}
        </ul>
      </section>
    </>
  );
}

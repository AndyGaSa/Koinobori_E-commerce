import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import './styles/profile.scss';

export default function Profile() {
  const { user } = useAuth0();
  const { name, picture, email } = user;
  const userData = JSON.parse(localStorage.getItem(email));

  let wanted = 0;
  let haveIt = 0;
  let favs = 0;
  let disLike = 0;

  function checkUserData() {
    if (userData) {
      userData.forEach((item) => {
        if (item.wanted) {
          wanted += 1;
        }
        if (item.haveIt) {
          haveIt += 1;
        }
        if (item.favs) {
          favs += 1;
        }
        if (item.disLike) {
          disLike += 1;
        }
      });
    }
  }

  checkUserData();

  return (
    <>
      <section className="user">
        <div className="user__top-container">

          <div className="user__data">
            <h2>{name}</h2>
            <p data-testid="user__email" className="user__email">{email}</p>
            <div className="profile-list-container">
              <span>Número de cómics</span>
              <ul>
                <li className="user__comic-property">
                  en propiedad:
                  {' '}
                  {haveIt}
                </li>
                <li className="user__comic-fav">
                  favoritos:
                  {' '}
                  {favs}
                </li>
                <li data-testid="user__comic-wanted" className="user__comic-wanted">
                  que quieres:
                  {' '}
                  {wanted}
                </li>
                <li className="user__comic-dislike">
                  que no te han gustado:
                  {' '}
                  {disLike}
                </li>
              </ul>
            </div>
          </div>
          <div className="user__image-container">
            <img
              src={picture}
              alt="Profile"
              className="user__image"
            />
            <img className="user__frame" src="https://i.ibb.co/5Tn58Mr/marco-5.png" alt="comic" />
          </div>
        </div>
      </section>
    </>
  );
}

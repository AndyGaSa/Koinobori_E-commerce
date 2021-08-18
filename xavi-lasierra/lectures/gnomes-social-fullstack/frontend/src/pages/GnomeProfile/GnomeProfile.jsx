import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import logUser from '../../redux/actions/user.creator';
import icons from '../../utils/gnomesSocialIcons';

import './gnomeProfile.scss';

function GnomeProfile() {
  const dispatch = useDispatch();
  const gnome = useSelector(({ currentGnome }) => currentGnome);

  const [userName, setUserName] = useState('');

  function login(newUsername) {
    if (newUsername.trim()) {
      dispatch(logUser(newUsername.trim()));
    }
  }

  return (
    <section className="gnome-profile">
      <h2 className="hide">PROFILE</h2>
      { Object.keys(gnome)?.length
        ? (
          <>
            <div className="gnome-profile__banner">
              <img className="gnome-profile__banner-image" src={icons.banner} alt="banner" />
            </div>
            <article className="gnome-profile__main-information">
              <img className="gnome-profile__picture" src={gnome?.picture} alt={gnome?.name} />
              <h3 className="gnome-profile__name">{gnome?.name}</h3>
              <span className="gnome-profile__age">
                {gnome?.age}
                {' '}
                years
              </span>
            </article>
            <article className="gnome-profile__secondary-information">
              <h2 className="hide">INFORMATION</h2>
              <ul className="gnome-profile__tags">
                {gnome?.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
              <ul className="gnome-profile__prominent">
                <li>
                  <span className="prominent__title">GENDER</span>
                  <span className="prominent__information">{gnome?.gender.toUpperCase()}</span>
                </li>
                <li>
                  <span className="prominent__title">EYE COLOR</span>
                  <span className="prominent__information">{gnome?.eyeColor.toUpperCase()}</span>
                </li>
                <li>
                  <span className="prominent__title">FAVORITE FRUIT</span>
                  <span className="prominent__information">{gnome?.favoriteFruit.toUpperCase()}</span>
                </li>
                <li>
                  <span className="prominent__title">REGISTER DATE</span>
                  <span className="prominent__information">{gnome?.registered.split('T')[0]}</span>
                </li>
              </ul>
              <p className="gnome-profile__about">{gnome?.about}</p>
            </article>
            <article className="gnome-profile__social">
              <h4 className="social__title">FRIENDS</h4>
              <ul className="social__gnomes">
                {gnome?.friends.map(({ name }) => (
                  <li>
                    <button className="social__gnome" type="button">{name}</button>
                    <button className="social__delete" type="button">x</button>
                  </li>
                ))}
              </ul>
              <h4 className="social__title">ADVERSARIES</h4>
              <ul className="social__gnomes">
                {gnome?.adversaries.map(({ name }) => (
                  <li>
                    <button className="social__gnome" type="button">{name}</button>
                    <button className="social__delete" type="button">x</button>
                  </li>
                ))}
              </ul>
            </article>
          </>
        )
        : (
          <>
            <span className="not-logged__title">Welcome!</span>
            <form className="not-logged__form">
              <input type="text" placeholder="Username" value={userName} onChange={({ target: { value } }) => setUserName(value)} />
              <button type="button" onClick={() => login(userName)}>Login</button>
            </form>
          </>
        )}
    </section>

  );
}

export default GnomeProfile;

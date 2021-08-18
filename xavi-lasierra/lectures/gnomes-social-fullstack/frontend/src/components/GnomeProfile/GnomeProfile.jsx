import React from 'react';
import propTypes from 'prop-types';

import icons from '../../utils/gnomesSocialIcons';

import './gnomeProfile.scss';

function GnomeProfile({ gnome }) {
  return (
    <section className="gnome-profile">
      <h2 className="hide">PROFILE</h2>
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
    </section>

  );
}

export default GnomeProfile;

GnomeProfile.propTypes = {
  gnome: propTypes.shape({
    picture: propTypes.string,
    age: propTypes.number,
    gender: propTypes.string,
    eyeColor: propTypes.string,
    favoriteFruit: propTypes.string,
    name: propTypes.string,
    friends: propTypes.arrayOf(propTypes.shape(
      { name: propTypes.string, _id: propTypes.string }
    )),
    adversaries: propTypes.arrayOf(propTypes.shape(
      { name: propTypes.string, _id: propTypes.string }
    )),
    tags: propTypes.arrayOf(propTypes.string),
    registered: propTypes.string,
    about: propTypes.string
  }).isRequired
};

import React from 'react';
import { useSelector } from 'react-redux';
import propTypes from 'prop-types';

import GnomeProfile from '../../components/GnomeProfile/GnomeProfile';
import Login from '../../components/Login/Login';

import './homePage.scss';

function HomePage({ currentUserId, currentUserFriends, currentUserAdversaries }) {
  const gnome = useSelector(({ currentGnome }) => currentGnome);

  return (
    <main>
      {Object.keys(gnome)?.length
        ? (
          <GnomeProfile
            gnome={gnome}
            currentUserId={currentUserId}
            currentUserFriends={currentUserFriends}
            currentUserAdversaries={currentUserAdversaries}
          />
        )
        : <Login />}
    </main>
  );
}

export default HomePage;

HomePage.propTypes = {
  currentUserId: propTypes.string,
  currentUserFriends: propTypes.arrayOf(propTypes.shape(
    { name: propTypes.string, _id: propTypes.string }
  )),
  currentUserAdversaries: propTypes.arrayOf(propTypes.shape(
    { name: propTypes.string, _id: propTypes.string }
  ))
};

HomePage.defaultProps = {
  currentUserId: '',
  currentUserFriends: [],
  currentUserAdversaries: []
};

/* eslint-disable no-underscore-dangle */
import React from 'react';
import propTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserSlash, faUser } from '@fortawesome/free-solid-svg-icons';

import './addTo.scss';

function AddTo({
  gnome, currentUserId, currentUserAdversaries, currentUserFriends
}) {
  return (
    <form className="friends-buttons">
      {currentUserId === gnome?._id
        ? <span className="friends-buttons__not-logged">Your profile</span>
        : (
          <>
            {(currentUserFriends.some(({ _id }) => _id === gnome._id)
            || currentUserAdversaries.some(({ _id }) => _id === gnome._id))
              ? (
                <>
                  {currentUserFriends.some(({ _id }) => _id === gnome._id)
                    ? (
                      <button className="friends-buttons__friend" type="button" alt="Delete friend">
                        <FontAwesomeIcon icon={faUserSlash} />
                      </button>
                    )
                    : (
                      <button className="friends-buttons__adversary" type="button" alt="Delete adversary">
                        <FontAwesomeIcon icon={faUserSlash} />
                      </button>
                    )}

                </>
              )
              : (
                <>
                  <button className="friends-buttons__friend" type="button" alt="Add friend">
                    <FontAwesomeIcon icon={faUser} />
                  </button>
                  <button className="friends-buttons__adversary" type="button" alt="Add adversary">
                    <FontAwesomeIcon icon={faUser} />
                  </button>
                </>
              )}
          </>
        )}
    </form>
  );
}

export default AddTo;

AddTo.propTypes = {
  gnome: propTypes.shape({
    _id: propTypes.string,
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
  }).isRequired,
  currentUserId: propTypes.string.isRequired,
  currentUserFriends: propTypes.arrayOf(propTypes.shape(
    { name: propTypes.string, _id: propTypes.string }
  )).isRequired,
  currentUserAdversaries: propTypes.arrayOf(propTypes.shape(
    { name: propTypes.string, _id: propTypes.string }
  )).isRequired
};

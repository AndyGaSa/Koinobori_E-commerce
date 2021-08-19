/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useDispatch } from 'react-redux';
import propTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserSlash, faUser } from '@fortawesome/free-solid-svg-icons';

import { logoutUser, updateUser } from '../../redux/actions/user.creator';

import './addTo.scss';

function AddTo({
  gnome, currentUserId, currentUserAdversaries, currentUserFriends
}) {
  const dispatch = useDispatch();

  function addFriendAdversary(type, id, list) {
    const idList = list.map(({ _id }) => _id);

    const dataToUpdate = {
      [type]: [...idList, gnome._id]
    };
    dispatch(updateUser(dataToUpdate, id));
  }

  function deleteFriendAdversary(type, id, list) {
    const dataToUpdate = {
      [type]: list.map(({ _id }) => _id).filter((gnomeId) => gnomeId !== gnome._id)
    };

    dispatch(updateUser(dataToUpdate, id));
  }

  return (
    <form className="friends-buttons">
      {currentUserId === gnome?._id
        ? (
          <>
            <span className="friends-buttons__user">Your profile</span>
            <br />
            <button className="friends-buttons__logout" type="button" onClick={() => dispatch(logoutUser())}>Logout</button>
          </>
        )
        : (
          <>
            {(currentUserFriends.some(({ _id }) => _id === gnome._id)
            || currentUserAdversaries.some(({ _id }) => _id === gnome._id))
              ? (
                <>
                  {currentUserFriends.some(({ _id }) => _id === gnome._id)
                    ? (
                      <button className="friends-buttons__friend" type="button" alt="Delete friend" onClick={() => deleteFriendAdversary('friends', currentUserId, currentUserFriends)}>
                        <FontAwesomeIcon icon={faUserSlash} />
                      </button>
                    )
                    : (
                      <button className="friends-buttons__adversary" type="button" alt="Delete adversary" onClick={() => deleteFriendAdversary('adversaries', currentUserId, currentUserAdversaries)}>
                        <FontAwesomeIcon icon={faUserSlash} />
                      </button>
                    )}

                </>
              )
              : (
                <>
                  <button className="friends-buttons__friend" type="button" alt="Add friend" onClick={() => addFriendAdversary('friends', currentUserId, currentUserFriends)}>
                    <FontAwesomeIcon icon={faUser} />
                  </button>
                  <button className="friends-buttons__adversary" type="button" alt="Add adversary" onClick={() => addFriendAdversary('adversaries', currentUserId, currentUserAdversaries)}>
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

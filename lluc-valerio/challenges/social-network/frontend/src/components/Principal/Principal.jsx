/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateUser } from '../../redux/actions/actionCreator';
import Navs from '../Navs/Navs';

import '../../styles/Principal.scss';

export default function Principal() {
  const [searchText, setSearchText] = useState('');
  const [searchResult, setSearchResult] = useState('');

  const dispatch = useDispatch();

  const persons = useSelector((store) => store.persons);
  const user = useSelector((store) => store.user);

  function chekcStatus(friendOrFoe, elementId) {
    if (friendOrFoe === 1) {
      if (user.friends?.some((people) => people._id === elementId)) {
        return 'person__button-friend-green';
      }
      return 'person__button-friend-grey';
    }
    if (user.adversaries?.some((people) => people._id === elementId)) {
      return 'person__button-adversaries-red';
    }
    return 'person__button-adversaries-grey';
  }

  function loadPicture(peopleId) {
    const people = persons?.find((person) => person._id === peopleId);
    return (
      <img className="person__image" src={people.picture} alt={`${people.name} portrait`} />
    );
  }

  function checkFriendStatus(personId) {
    if (user?.friends?.some((person) => person._id === personId)) {
      // eslint-disable-next-line no-console
      console.log('OUT friend');
      const arrayOfFriends = user?.friends?.filter((friend) => friend._id !== personId);
      dispatch(updateUser(user._id, { friends: arrayOfFriends }));
    } else {
      // eslint-disable-next-line no-console
      console.log('IN friend');
      user?.friends?.push(personId);
      dispatch(updateUser(user._id, { friends: user.friends }));
    }
  }

  function checkFoeStatus(personId) {
    if (user?.adversaries?.some((person) => person._id === personId)) {
      // eslint-disable-next-line no-console
      console.log('OUT adversarie');
      const arrayOfEnemies = user?.adversaries?.filter((foe) => foe._id !== personId);
      dispatch(updateUser(user._id, { adversaries: arrayOfEnemies }));
    } else {
      // eslint-disable-next-line no-console
      console.log('IN adversarie');
      user?.adversaries?.push(personId);
      dispatch(updateUser(user._id, { adversaries: user.adversaries }));
    }
  }

  function loadSearch(personsFound) {
    setSearchResult(
      <section className="people">
        <h2>People Found</h2>
        <ul className="people__list">
          {
            (personsFound?.length <= 0)
              ? (
                <span className="people__noFound">
                  no people found with this name...
                </span>
              )
              : personsFound?.map((person) => (
                (person._id !== user._id)
                  && (
                    <li className="person" key={person.name}>
                      <div className="person__info">
                        <span>{person.name}</span>
                        {loadPicture(person._id)}
                      </div>
                      <div className="person__actions">
                        <button
                          className={chekcStatus(1, person._id)}
                          type="button"
                          onClick={() => { checkFriendStatus(person._id); }}
                        >
                          Friend
                        </button>
                        <button
                          className={chekcStatus(2, person._id)}
                          type="button"
                          onClick={() => { checkFoeStatus(person._id); }}
                        >
                          Foe
                        </button>
                      </div>
                    </li>
                  )
              ))
                }
        </ul>
      </section>
    );
  }

  function findUsers() {
    let personsFound;
    if (searchText.trim().length <= 0) {
      personsFound = persons;
    } else {
      personsFound = persons.filter((person) => (
        person.name.toLowerCase().includes(searchText.trim().toLowerCase())
      ));
    }
    loadSearch(personsFound);
  }

  return (
    <>
      <Navs />
      <section className="principal">
        <div className="user-info">
          <ul className="user-info__data">
            <li key={user.name}>
              <span className="data-attribute">Age:</span>
              {' '}
              {user.age}
            </li>
            <li>
              <span className="data-attribute">Eye color:</span>
              {' '}
              {user.eyeColor}
            </li>
            <li>
              <span className="data-attribute">Gender:</span>
              {' '}
              {user.gender}
            </li>
            <li>
              <span className="data-attribute">About:</span>
              {' '}
              {user.about}
            </li>
            <li>
              <span className="data-attribute">Registered:</span>
              {' '}
              {user.registered}
            </li>
            <li>
              <span className="data-attribute">Tags:</span>
              {' '}
              {user.tags}
            </li>
            <li>
              <span className="data-attribute">Greeting:</span>
              {' '}
              {user.greeting}
            </li>
            <li>
              <span className="data-attribute">Favorite fruit:</span>
              {' '}
              {user.favoriteFruit}
            </li>
          </ul>
        </div>
        <aside className="find-person">
          <input className="find-person__input" onChange={(event) => setSearchText(event.target.value)} placeholder="search by people name" />
          <button className="find-person__button" onClick={findUsers} type="button">Find people</button>
        </aside>
        {searchResult}
      </section>
    </>
  );
}

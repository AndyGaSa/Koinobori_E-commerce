/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Navs from '../Navs/Navs';

import '../../styles/Principal.scss';

export default function Principal() {
  const [searchText, setSearchText] = useState('');
  const [searchResult, setsearchResult] = useState('');

  const persons = useSelector((store) => store.persons);
  const user = useSelector((store) => store.user);

  let searchDone = false;

  function loadPicture(peopleId) {
    const people = persons?.find((person) => person._id === peopleId);
    return (
      <img className="people__image" src={people.picture} alt={`${people.name} portrait`} />
    );
  }

  function loadSearch(personsFound) {
    if (searchDone) {
      setsearchResult(
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
                  <li key={person.name}>
                    <span>{person.name}</span>
                    {loadPicture(person._id)}
                  </li>
                ))
              }
          </ul>
        </section>
      );
    }
    return (<></>);
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
    searchDone = true;
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

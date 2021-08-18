import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Navs from '../Navs/Navs';

import '../../styles/Principal.scss';

export default function Principal() {
  // const persons = useSelector((store) => store.persons);
  const user = useSelector((store) => store.user);
  const [searchText, setSearchText] = useState('');

  function findUsers() {
    alert(searchText);
    // persons;
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
      </section>
    </>
  );
}

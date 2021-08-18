import React from 'react';
import { useSelector } from 'react-redux';

import Navs from '../Navs/Navs';

export default function Principal() {
  const user = useSelector((store) => store.user);

  function findUsers() {
    alert('holiiii');
  }
  return (
    <>
      <Navs />
      <section>
        <ul>
          <li>
            age:
            {' '}
            {user.age}
          </li>
          <li>
            eyeColor:
            {' '}
            {user.eyeColor}
          </li>
          <li>
            gender:
            {' '}
            {user.gender}
          </li>
          <li>
            about:
            {' '}
            {user.about}
          </li>
          <li>
            registered:
            {' '}
            {user.registered}
          </li>
          <li>
            tags:
            {' '}
            {user.tags}
          </li>
          <li>
            greeting:
            {' '}
            {user.greeting}
          </li>
          <li>
            favoriteFruit:
            {' '}
            {user.favoriteFruit}
          </li>
        </ul>
      </section>
      <aside className="find-person">
        <input type="text" />
        <button onClick={findUsers} type="button">Find</button>
      </aside>
    </>
  );
}

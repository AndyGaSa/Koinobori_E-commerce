/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadFriends } from '../redux/actions/actionCreator';
import Person from '../components/Person';
import './People.scss';

export default function People() {
  const dispatch = useDispatch();
  const friends = useSelector((store) => store.friends);
  let foundFriends = [];
  const [friendsList, setFriendsList] = useState(friends);

  const filterUsers = function searchPeople(event) {
    foundFriends = friends.find((current) => current.name === event.target.value);
    console.log('hola');
  };
  if (foundFriends?.length > 0) {
    setFriendsList(foundFriends);
  }
  useEffect(() => {
    dispatch(loadFriends());
  }, []);

  return (
    <>
      <input type="text" onChange={filterUsers} placeholder="Search friends" className="people__input" />
      <section>
        <ul className="people__container">
          {(friendsList.length > 0) && friends.map((person) => (
            <Person key={`person_${person._id}`} personData={person} />
          ))}

        </ul>
      </section>
    </>
  );
}

/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadFriends } from '../redux/actions/actionCreator';
import Person from '../components/Person';
import './People.scss';

export default function People() {
  const dispatch = useDispatch();
  const friends = useSelector((store) => store.friends);
  useEffect(() => {
    dispatch(loadFriends());
  }, []);
  return (
    <>
      <input type="text" placeholder="Search friends" className="people__input" />
      <section>
        <ul className="people__container">
          {(friends.length > 0) && friends.map((person) => (
            <Person key={`person_${person._id}`} personData={person} />
          ))}

        </ul>
      </section>
    </>
  );
}

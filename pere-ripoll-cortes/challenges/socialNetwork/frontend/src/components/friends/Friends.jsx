/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useSelector } from 'react-redux';

export default function Friends() {
  const objId = '611bc278d099c1190e3313d6';
  const allUsers = useSelector(({ userData }) => userData);
  const user = allUsers[0]?.filter((e) => e._id === objId);

  return (
    <>
      {user[0].friends.map((e) => (
        <p>{e.name}</p>
      ))}
    </>
  );
}

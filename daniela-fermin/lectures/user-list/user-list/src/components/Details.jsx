import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

export default function Details() {
  const users = useSelector((store) => store.users);
  const dispatch = useDispatch();

  const { userId } = useParams();
  const [user, setUser] = useState();
  useEffect(() => {
    if (userId) {
      const foundUser = users.find((currentUser) => currentUser.id === userId);
      setUser(foundUser);
    }
  },
  [userId]);

  return (
    <>
      <h2>
        {user.name}
        {' '}
        Details
      </h2>

    </>

  );
}

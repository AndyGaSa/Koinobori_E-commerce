/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function Details() {
  const users = useSelector((store) => store.users);
  // const dispatch = useDispatch();

  const { userId } = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    if (userId) {
      const foundUser = users.find((currentUser) => currentUser._id === userId);
      setUser(foundUser);
    }
  }, [userId]);

  return (
    <header>
      {console.log(userId, 'este es mi userId')}

      <h2>
        {user?.name.toUpperCase()}
        {' '}
        Info
      </h2>
    </header>

  );
}

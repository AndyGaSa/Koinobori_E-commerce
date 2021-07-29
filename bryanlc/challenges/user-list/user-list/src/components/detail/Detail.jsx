import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import DetailForm from './DetailForm';

export default function Detail() {
  const users = useSelector((store) => store.users);

  const { heroId } = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    if (heroId) {
      const foundUser = users.find((currentUser) => currentUser.id === +heroId);
      setUser(foundUser);
    }
  }, [heroId]);

  return (
    <div>
      <h1>
        {user?.name.toUpperCase()}
        {' '}
        Detail Page
      </h1>
      <DetailForm user={user} />
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function DetailsView() {
  const users = useSelector((store) => store.users);

  const { userId } = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    if (userId) {
      const foundUser = users.find((currentUser) => currentUser.id === +userId);
      setUser(foundUser);
    }
  }, [userId]);

  return (
    <div className="main-container">
      <h2>
        {user?.name}
        {' '}
        Details
      </h2>
      <span>{user?.email}</span>
      <span>{user?.phone}</span>
      <span>{user?.website}</span>
    </div>
  );
}

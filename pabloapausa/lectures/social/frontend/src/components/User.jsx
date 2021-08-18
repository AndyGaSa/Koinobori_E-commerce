import React from 'react';

export default function User() {
  const users = userSelector((store) => store.users);
}

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import loadUsers from './redux/actions/actionCreatorUsers';

export default function App() {
  const usersList = useSelector(({ users }) => users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hola Panitas</h1>
        <ul>
          {usersList.map((user) => <li>{user.name}</li>)}
        </ul>
      </header>
    </div>
  );
}

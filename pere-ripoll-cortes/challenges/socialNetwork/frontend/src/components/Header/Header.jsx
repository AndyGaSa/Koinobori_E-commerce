import React, { useEffect } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loadUsers } from '../../redux/actions/actionCreators';

export default function Header() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUsers);
  }, []);
  return (
    <>
      <div className="header">
        <Link to="/">DashBoard</Link>
        <Link to="/profile">My Profile</Link>
        <Link to="/register">Register New User</Link>
      </div>
      <div className="test" />
    </>
  );
}

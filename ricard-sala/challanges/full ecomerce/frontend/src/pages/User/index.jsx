import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postUserToApi } from '../../redux/actions/actionCreators';
import './styles.scss';

export default function User() {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState({});

  const inputHandle = (event) => {
    setUserName({
      name: event.target.value,
    });
  };

  return (
    <form className="form">
      <input type="text" id="lname" name="lname" onChange={inputHandle} />
      <input className="form-submit" onClick={() => dispatch(postUserToApi(userName))} type="submit" value="LOGIN" />
    </form>

  );
}

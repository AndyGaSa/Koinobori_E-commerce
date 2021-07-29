/*
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import action from '../redux/actions/action.types';

function App() {

  return (
    <>

    </>
  );
}

  const users = useSelector((store) => store.users);
  const dispatch = useDispatch();
  const [input, setInput] = useState();
  const [index, setIndex] = useState();

  function create() {
    if (!input.trim()) return;
    dispatch({
      type: action.CREATE_USER,
      user: input,
    });

    setInput('');
  }

  function update() {
    if (!input.trim()) return;
    dispatch({
      type: action.UPDATE_USER,
      user: input,
      index,
    });

    setInput('');
  }
*/

/* eslint-disable react/jsx-key */

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actionTypes from '../Redux/actions/action.types';
import './ToDo.css';

function ToDo() {
  const toDos = useSelector((store) => store.toDos);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const [index, setIndex] = useState();

  function create() {
    if (!inputValue.trim()) return;

    dispatch({
      type: actionTypes.CREATE_TODO,
      toDo: inputValue,
    });

    setInputValue('');
  }

  function update() {
    if (!inputValue.trim()) return;

    dispatch({
      type: actionTypes.UPDATE_TODO,
      toDo: inputValue,
      index,
    });

    setInputValue('');
  }

  return (
    <div className="toDo__main">
      <section className="toDo__title">
        <h1>Welcome ToDo List</h1>
        <h4>by Jordi Trassi</h4>
      </section>
      
      <h2>Insert your task:</h2>
      <input
        type="text"
        name="todo"
        maxLength="120"
        value={inputValue}
        onChange={((event) => setInputValue(event.target.value))}
      />
      <nav className="toDo__buttons">
        <button
          className="toDo__nav-button"
          type="button"
          onClick={create}
        >
          create
        </button>
        <button
          className="toDo__nav-button"
          type="button"
          onClick={update}
        >
          update
        </button>
      </nav>
      
      <ul>
        {
          toDos.map((toDo, toDoIndex) => (
              <li>
              <button
                  className="toDo__button-task"
                  type="button"
                  onClick={() => {
                  setInputValue(toDo);
                  setIndex(toDoIndex);
                  }}
              >
                  {toDo}

              </button>
              <button
                  className="toDo__button-delete"
                  type="button"
                  onClick={() => dispatch({
                  type: actionTypes.DELETE_TODO,
                  toDo,
                  })}
              >
                  X
              </button>
              </li>
          ))
        }
      </ul>
    </div>
  );
}

export default ToDo;
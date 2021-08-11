/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actionTypes from '../redux/actions/acction.types';
import './Todo.css';

function ToDo() {
  const toDos = useSelector((store) => store.toDos);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState();
  const [index, setIndex] = useState();

  function create() {
    if (!inputValue.trim()) return;

    dispatch({
      type: actionTypes.CREATE_TODO,
      toDo: inputValue
    });

    setInputValue('');
  }

  function update() {
    if (!inputValue.trim()) return;

    dispatch({
      type: actionTypes.UPDATE_TODO,
      toDo: inputValue,
      index
    });

    setInputValue('');
  }

  return (
    <>
      <div className="main__container">
        <h1>ToDo List</h1>

        <input
          type="text"
          name="todo"
          id="input"
          value={inputValue}
          onChange={((event) => setInputValue(event.target.value))}
        />

        <button
          type="button"
          id="button_create"
          onClick={create}
        >
          create
        </button>
        <button
          type="button"
          id="button_update"
          onClick={update}
        >
          update
        </button>
        <ul>
          {
            toDos.map((toDo, toDoIndex) => (
              <li>
                <button
                  type="button"
                  onClick={() => {
                    setInputValue(toDo);
                    setIndex(toDoIndex);
                  }}
                >
                  {toDo}

                </button>
                <button
                  type="button"
                  id="button__delete"
                  onClick={() => dispatch({
                    type: actionTypes.DELETE_TODO,
                    toDo
                  })}
                >
                  x
                </button>
              </li>
            ))
        }
        </ul>
      </div>
    </>
  );
}

export default ToDo;

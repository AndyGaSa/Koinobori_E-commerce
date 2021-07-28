/* eslint-disable react/no-this-in-sfc */
/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actionTypes from '../redux/actions/action.types';
import './ToDo.css';

function ToDo() {
  const toDos = useSelector((store) => store.toDos);
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  function create() {
    if (!input.trim()) return;
    dispatch({
      type: actionTypes.CREATE_TODO,
      toDo: input,
    });
    setInput('');
  }
  const [deleteClass, SetDeleteClass] = useState('');
  function updateInput() {
    SetDeleteClass('deleteButtonHide');
  }
  return (
    <>
      <h1>ToDo List</h1>
      <input type="text" value={input} onChange={(event) => setInput(event.target.value)} name="todo" />
      <button type="button" onClick={create}>Save</button>

      <ul>
        {toDos.map((toDo) => (
          <li>
            <input
              placeholder="name"
              name="name"
              type="text"
              defaultValue={toDo}
              className="inputLista"
              onClick={updateInput}
            />
            <button
              type="button"
              onClick={() => {
                dispatch({
                  type: actionTypes.DELETE_TODO,
                  toDo,
                });
                updateInput();
              }}
              className={deleteClass}
            >
              x

            </button>
            <button type="button" className="updateButton">Update</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ToDo;

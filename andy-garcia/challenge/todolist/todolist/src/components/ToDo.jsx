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
  const [index, setIndex] = useState();
  const [updateValue, setUpdateValue] = useState('');

  function create() {
    if (!input.trim()) return;
    dispatch({
      type: actionTypes.CREATE_TODO,
      toDo: input,
    });
    setInput('');
  }
  const [deleteClass, SetDeleteClass] = useState('');
  const [updateClass, SetUpdateClass] = useState('updateButton');
  function updateClasses() {
    function updateInput() {
      SetDeleteClass('deleteButtonHide');
    }
    function changeUpdateClass() {
      SetUpdateClass('showUpdate');
    }
    updateInput();
    changeUpdateClass();
  }
  return (
    <>
      <h1>ToDo List</h1>
      <input type="text" value={input} onChange={(event) => setInput(event.target.value)} name="todo" />
      <button type="button" onClick={create}>Save</button>

      <ul>
        {toDos.map((toDo, toDoIndex) => (
          <li>
            <input
              placeholder="name"
              name="name"
              type="text"
              onChange={((event) => setUpdateValue(event.target.value))}
              defaultValue={toDo}
              className="inputLista"
              onClick={() => {
                updateClasses();
                setIndex(toDoIndex);
              }}
            />
            <button
              type="button"
              onClick={() => {
                dispatch({
                  type: actionTypes.DELETE_TODO,
                  toDo,
                });
              }}
              className={deleteClass}
            >
              x

            </button>
            <button
              type="button"
              className={updateClass}
              onClick={() => {
                dispatch({
                  type: actionTypes.UPDATE_TODO,
                  toDo: updateValue,
                  index,
                });
              }}
            >
              Update

            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ToDo;

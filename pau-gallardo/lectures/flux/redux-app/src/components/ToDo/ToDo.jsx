import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actionTypes from '../../redux/actions/action.types';

export default function ToDo() {
  const toDos = useSelector((store) => store.toDos);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState();
  // const [index, setIndex] = useState();

  function create() {
    if (!inputValue.trim()) return;

    dispatch({
      type: actionTypes.CREATE_TODO,
      toDo: inputValue,
    });

    setInputValue('');
  }
  return (
    <>
      <h1>To Do list</h1>
      <input
        type="text"
        name="todo"
        placeholder="Set your To Do"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button
        type="button"
        onClick={create}
      >
        Create

      </button>
      <ul>
        {toDos.map((toDo) => (
          <li>
            {toDo}
            <button
              type="button"
              onClick={() => dispatch({
                type: actionTypes.DELETE_TODO,
                toDo,
              })}
            >
              x
            </button>
          </li>

        ))}
      </ul>
    </>
  );
}

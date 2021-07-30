import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actionTypes from '../redux/actions/actions.types';
import './Todolist.css';

export default function ToDo() {
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
    <div className="main-container">
      <h1 className="title">To Do List</h1>
      <div className="main-container__section">
        <input
          className="input"
          type="text"
          name="todo"
          value={inputValue}
          onChange={((event) => setInputValue(event.target.value))}
        />
        <div className="main-container__buttons-container">
          <button
            data-testid="create-button"
            className="main-container__buttons"
            type="button"
            onClick={create}
          >
            Create task
          </button>
          <button
            className="main-container__buttons"
            type="button"
            onClick={update}
          >
            Update task
          </button>
        </div>
      </div>
      <ul>
        {
            toDos.map((toDo, toDoIndex) => (
              <li>
                <button
                  className="list-button"
                  type="button"
                  onClick={() => {
                    setInputValue(toDo);
                    setIndex(toDoIndex);
                  }}
                >
                  {toDo}

                </button>
                <button
                  className="main-container__buttons delete-button"
                  type="button"
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
  );
}

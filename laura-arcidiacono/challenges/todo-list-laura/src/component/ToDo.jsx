import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actionTypes from '../redux/actions/action.types';

import './ToDo.css';

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
    <main>
      <h1>ToDo List</h1>
      <section className="toDo-actions">
        <div className="toDo-actions__input">
          <input
            type="text"
            name="todo"
            value={inputValue}
            onChange={((event) => setInputValue(event.target.value))}
          />
          <button
            type="button"
            className="toDo-Actions__buttons"
            onClick={create}
          >
            Create Task
          </button>
          <button
            type="button"
            className="toDo-Actions__buttons"
            onClick={update}
          >
            Update Task
          </button>
        </div>
        <div className="toDo-actions__list">
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
                  onClick={() => dispatch({
                    type: actionTypes.DELETE_TODO,
                    toDo
                  })}
                >
                  Delete
                </button>
              </li>
            ))
        }
          </ul>
        </div>
      </section>
    </main>
  );
}

export default ToDo;

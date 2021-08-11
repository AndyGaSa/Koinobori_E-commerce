import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actionTypes from '../redux/actions/action.types';

import './ToDo.css';

export default function ToDo() {
  const toDos = useSelector((store) => store.toDos);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState();
  const [index, setIndex] = useState();
  function create() {
    if (!inputValue.trim()) return;

    dispatch({
      type: actionTypes.CREATE_TASK,
      toDo: inputValue
    });

    setInputValue('');
  }

  function update() {
    if (!inputValue.trim()) return;

    dispatch({
      type: actionTypes.UPDATE_TASK,
      toDo: inputValue,
      index
    });

    setInputValue('');
  }

  return (
    <div className="container-fluid">
      <h1 className="display-1">ToDo List</h1>

      <input
        type="text"
        name="todo"
        value={inputValue}
        onChange={((event) => setInputValue(event.target.value))}
        className="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-default"
      />

      <button
        type="button"
        onClick={create}
        className="btn btn-secondary"
      >
        create
      </button>
      <button
        type="button"
        onClick={update}
        className="btn btn-secondary"
      >
        update
      </button>
      <ul>
        {
            toDos.map((toDo, toDoIndex) => (
              <li>
                <div className="d-flex justify-content-center">
                  <button
                    type="button"
                    onClick={() => {
                      setInputValue(toDo);
                      setIndex(toDoIndex);
                    }}
                    className="btn btn-light flex-grow-1"
                  >
                    {toDo}

                  </button>
                  <button
                    type="button"
                    onClick={() => dispatch({
                      type: actionTypes.DELETE_TASK,
                      toDo
                    })}
                    className="btn btn-outline-danger"
                  >
                    x
                  </button>
                </div>

              </li>
            ))
        }
      </ul>
    </div>
  );
}

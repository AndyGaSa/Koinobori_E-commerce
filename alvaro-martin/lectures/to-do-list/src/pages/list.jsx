import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actionTypes from '../redux/actions/actionTypes';
import './style.css';

function ToDo() {
  const toDos = useSelector((store) => store.toDos);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState();
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
    <div className="toDoList">
      <h1>ToDo List</h1>
      <div className="text">
        <input
          className="text-context"
          type="text"
          name="todo"
          value={inputValue}
          onChange={((event) => setInputValue(event.target.value))}
        />

        <button
          className="button"
          type="button"
          onClick={create}
        >
          create
        </button>
        <button
          className="button"
          type="button"
          onClick={update}
        >
          update
        </button>
      </div>
      <ul>
        {
            toDos.map((toDo, toDoIndex) => (

              <li>

                <input type="checkbox" className="checkbox" />
                <button
                  className="task"
                  type="button"
                  onClick={() => {
                    setInputValue(toDo);
                    setIndex(toDoIndex);
                  }}
                >
                  {toDo}

                </button>
                <button
                  className="delete"
                  type="button"
                  onClick={() => dispatch({
                    type: actionTypes.DELETE_TODO,
                    toDo,
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

export default ToDo;

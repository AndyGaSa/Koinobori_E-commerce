import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actionTypes from '../redux/actions/actionsTypes';

export default function ToDo() {
  const toDos = [useSelector((store) => store.toDos)];
  const dispatch = useDispatch();
  const { inputValue } = useState();

  return (
    <section>
      <input
        type="text"
        name="todo"
        value={inputValue}
      />
      <div className="buttons-container">
        <button
          type="button"
          onClick={() => dispatch({
            type: actionTypes.CREATE_TODO,
            toDo: inputValue
          })}
        >
          Add Task
        </button>
        <button type="button">Uptdate Task</button>
        <button type="button">Task Order</button>
      </div>
      <ul>
        {toDos.map((todo) => {
          <li>
            <p>{todo}</p>
            <button
              type="button"
              onClick={() => dispatch({ type: actionTypes.DELETE_TODO, toDos })}
            >
              Remove Task
            </button>
          </li>;
        })}

      </ul>

    </section>
  );
}

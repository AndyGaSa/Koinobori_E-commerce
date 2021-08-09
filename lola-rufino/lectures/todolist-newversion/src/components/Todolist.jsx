import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Todolist.css';
import {
  createToDo,
  deleteToDo,
  loadToDos,
  updateToDo
} from '../redux/actions/action.creators';

export default function ToDo() {
  const toDos = useSelector((store) => store.toDos);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState();
  const [index, setIndex] = useState();

  useEffect(() => {
    dispatch(loadToDos());
  }, []);

  function create() {
    if (!inputValue.trim()) return;

    dispatch(createToDo(inputValue));

    setInputValue('');
  }

  function update() {
    if (!inputValue.trim()) return;

    dispatch(updateToDo(inputValue, index));

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
          data-testid="taskInput"
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
            data-testid="update-button"
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
              <li data-testid={`list-item-${toDoIndex}`} key={`list-item-${toDo}`}>
                <button
                  data-testid={`item-${toDoIndex}`}
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
                  data-testid={`delete-button-${toDoIndex}`}
                  className="main-container__buttons delete-button"
                  type="button"
                  onClick={() => dispatch(deleteToDo(toDo))}
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

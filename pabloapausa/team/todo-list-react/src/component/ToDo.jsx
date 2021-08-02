import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';
import {
  createToDo,
  deleteToDo,
  loadToDos,
  updateToDo,
} from '../redux/actions/to-do.creators';

function ToDo() {
  const toDos = useSelector((store) => store.toDos);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState();
  const [index, setIndex] = useState();

  useEffect(() => {
    dispatch(loadToDosWithAsync());
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
    <>
      <Header />

      <input
        type="text"
        name="todo"
        data-testid="taskInput"
        value={inputValue}
        onChange={((event) => setInputValue(event.target.value))}
      />

      <button
        type="button"
        onClick={create}
        data-testid="create-button"
      >
        create
      </button>
      <button
        type="button"
        onClick={update}
        data-testid="update-button"
      >
        update
      </button>
      <ul>
        {
            toDos.map((toDo, toDoIndex) => (
              <li data-testid={`list-item-${toDoIndex}`} key={`list-item-${toDo}`}>
                <button
                  data-testid={`item-${toDoIndex}`}
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
                  onClick={() => dispatch(deleteToDo(toDo))}
                  data-testid={`delete-button-${toDoIndex}`}
                >
                  x
                </button>
              </li>
            ))
        }
      </ul>
    </>
  );
}

export default ToDo;

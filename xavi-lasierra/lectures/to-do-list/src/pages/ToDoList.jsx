import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import actionTypes from '../redux/actions/action.types';

function ToDoList() {
  const toDoList = useSelector((store) => store.toDos);
  const dispatch = useDispatch();
  const [newToDo, setNewToDo] = useState('');

  function createUpdate() {
    if (newToDo.trim() === '') return;

    dispatch({
      type: actionTypes.CREATE_TODO,
      newToDo
    });
    setNewToDo('');
  }

  return (
    <main className="to-do">
      <form className="to-do__create-update">
        <input type="text" name="todo" value={newToDo} onChange={(event) => setNewToDo(event.target.value)} />
        <button
          type="button"
          onClick={createUpdate}
        >
          Add
        </button>
      </form>
      <ul>
        {toDoList.map((toDo) => <li>{toDo}</li>)}
      </ul>
    </main>
  );
}

export default ToDoList;

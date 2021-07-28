import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import actionTypes from '../redux/actions/action.types';

function ToDoList() {
  const toDoList = useSelector((store) => store.toDos);
  const dispatch = useDispatch();
  const [newToDo, setNewToDo] = useState('');

  return (
    <main>
      <input type="text" name="todo" value={newToDo} onChange={(event) => setNewToDo(event.target.value)} />
      <button
        type="button"
        onClick={() => dispatch({
          type: actionTypes.CREATE_TODO,
          newToDo
        })}
      >
        Add

      </button>
      <ul>
        {toDoList.map((toDo) => <li>{toDo}</li>)}
      </ul>
    </main>
  );
}

export default ToDoList;

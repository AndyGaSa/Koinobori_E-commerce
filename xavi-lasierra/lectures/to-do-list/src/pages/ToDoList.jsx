import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import actionTypes from '../redux/actions/action.types';

function ToDoList() {
  const toDoList = useSelector((store) => store.toDos);
  const dispatch = useDispatch();
  const [newToDo, setNewToDo] = useState('');
  const [buttonName, setButtonName] = useState('Add');
  let updatingIndex = null;

  function createUpdate() {
    if (newToDo.trim() === '') return;

    if (buttonName === 'Add') {
      dispatch({
        type: actionTypes.CREATE_TODO,
        newToDo
      });
    } else {
      dispatch({
        type: actionTypes.UPDATE_TODO,
        newToDo,
        toDoIndex: updatingIndex
      });
      setButtonName('Add');
    }

    setNewToDo('');
  }

  function changeToCreate() {
    setButtonName('Add');
    setNewToDo('');
    updatingIndex = null;
  }

  function changeToUpdate(toDo, toDoIndex) {
    setButtonName('Update');
    setNewToDo(toDo);
    updatingIndex = toDoIndex;
  }

  return (
    <main className="to-do">
      <section className="to-do__inputs">
        <form className="to-do__create-update">
          <input type="text" name="todo" value={newToDo} onChange={(event) => setNewToDo(event.target.value)} />
          <button
            type="button"
            onClick={createUpdate}
          >
            {buttonName}
          </button>
        </form>
        {buttonName === 'Update' && <button className="to-do__cancel-update" type="button" onClick={changeToCreate}>CANCEL UPDATE</button>}
      </section>
      <ul>
        {toDoList.map((toDo, toDoIndex) => (
          <li>
            <button className="to-do__task" type="button" onClick={() => changeToUpdate(toDo, toDoIndex)}>{toDo}</button>
            <button
              className="to-do__delete"
              type="button"
              onClick={() => dispatch({
                type: actionTypes.DELETE_TODO,
                toDoIndex
              })}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default ToDoList;

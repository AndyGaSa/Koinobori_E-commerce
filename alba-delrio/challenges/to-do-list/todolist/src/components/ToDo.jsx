/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actionTypes from '../redux/actions/action.types';
import './ToDo.css';

export default function ToDo() {
  const dispatch = useDispatch();
  const toDos = useSelector((store) => store.toDos);
  const [newToDo, setToDo] = useState('');
  const [button, setButton] = useState('');
  function create() {
    if (!newToDo.trim()) return;
    dispatch({
      type: actionTypes.CREATE_TODO,
      toDo: newToDo
    });
    setToDo('');
  }
  function modify() {
    setButton('button');
  }

  return (

    <>
      <div className="title">
        <h1>To_Do_List</h1>
      </div>
      <div className="todo">
        <input
          type="text"
          name="ToDo"
          value={newToDo}
          onChange={(event) => setToDo(event.target.value)}
        />
        <button type="button" onClick={create}>Add</button>
      </div>
      <ul />
      {
            toDos.map((toDo) => (
              <li>

                <input
                  type="text"
                  name="name"
                  defaultValue={toDo}
                  className="inputList"
                  placeHolder="name"
                  onClick={modify}
                />
                <button
                  className={button}
                  type="button"
                  onClick={() => {
                    dispatch({
                      type: actionTypes.DELETE_TODO,
                      toDo
                    }); modify();
                  }}
                >
                  x
                </button>
                <button type="button" className="updateButton">Update</button>
              </li>
            ))
        }
    </>
  );
}
